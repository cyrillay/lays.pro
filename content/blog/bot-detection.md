+++
title = "Detecting bot traffic on a webserver"
description = ""
date = "2019-08-07"
author = "Cyril Lay"
sec = 10
+++

*This article is still a draft.*

## Introduction 

The goal of this project was to create a POC for a bot detection system, by using a data file containing all HTTP requests to a server. 
I started by browsing and skimming through a few technical and scientific papers and resources to gather knowledge on how bot detection is done when applied to HTTP logs, those resources will be linked at the bottom of this article.


# Case study

As an example, we'll use logs from the website http://www.almhuette-raith.at.

## What is inside an HTTP request ?

Here is an anonymised example of a log request contained in the `access.log` file :

```
91.112.185.43 - - [21/Mar/2020:17:17:49 +0100] "GET /apache-log/access.log HTTP/1.0" 200 656584 "http://google.com" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36" "-"
```

- `91.112.185.43` is the IP from the the computer that made the request (the remote host)
- `21/Mar/2020:17:17:49 +0100` is the timestamp of the request
- `GET /index.html` is the request itself 
- `200` is the HTTP code returned to the client
- `656584` is the size of the response made to the client
- `http://google.com` is the referrer, the URL of the page from which this request was initiated
- `Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36` is the user agent, a browser identification string

## Basic bot detection features

Using the fields from above, we can already detect many bots using the following rules :

- Presence of a bot name in the user agent (Googlebot, AdsBot-Google, BingBot…).
- Presence of a request to the ‘robots.txt’ file
- The IP address is [known to be a bot](https://udger.com/resources/ip-list)

Then, we can group the requests of similar IPs during a timeframe, to gather statistics on those sessions, which will become bot detection features, such as :
- The mean time spent per page is below 0.5 seconds : a bot would not spend time "reading" a page like a human
- The referrer is empty for the all the requests of the session : a user usually navigates through websites and doesn't enter the URL manually
- All the requests are "HEAD" requests instead of the more common GET : the HEAD request is often used by bots for efficiency
- No image is loaded when reading the page
- The session had a single request

## Implementation

### Parsing the log file

Let's jump right into the implementation and download the log file :

```wget http://www.almhuette-raith.at/apache-log/access.log```

Then, we need to parse it and extract the fields of interest :


{{< highlight python >}}
def parser(log_line):
    regex = (
        r"^(?P<host>.*?)" + r"\s"
        r"\s" + r"\s"
        r"\S+" + r"\s"
        r"\S+" + r"\s"
        r"(?P<timestamp>\[.*?\])" + r"\s"
        r"\"(?P<request>.*?)\"" + r"\s"
        r"(?P<status>\d{3})" + r"\s"
        r"(?P<size>\S+)" + r"\s"
        r"(?P<referrer>\S+)" + r"\s"
        r"(?P<user_agent>\"(.+?)\")"
    )
    match = re.search(LOG_REGEX, log_line)
    if not match:
        return None
    else:
        return (
            match.group("host"),
            match.group("timestamp"),
            match.group("request"),
            match.group("status"),
            match.group("size"),
            match.group("referrer"),
            match.group("user_agent"),
        )


def parse_log_file(path, from_date: dt.date = None):
    """
    Reads and parses lines from the Apache .log file at `path` and returns it as a dataframe.
    This methods assumes the log file is chronological, it is read from the end until the `from_date` is reached.
    """
    if not from_date:
        from_date = dt.date(2020, 3, 20)
    data = {
        "host": [],
        "timestamp": [],
        "request": [],
        "status": [],
        "size": [],
        "referrer": [],
        "user_agent": [],
    }
    with open(path, "r") as file:
        lines = file.readlines()
        for line in reversed(lines):
            parsed_log_line = _parser(line)
            if parsed_log_line:
                (
                    host,
                    time,
                    request,
                    status,
                    size,
                    referrer,
                    user_agent,
                ) = parsed_log_line
            else:
                continue
            parsed_date = datetime.strptime(time, "[%d/%b/%Y:%H:%M:%S %z]")
            if parsed_date.date() < from_date:
                break
            data["host"].append(host)
            data["timestamp"].append(parsed_date)
            data["request"].append(request)
            data["status"].append(status)
            data["size"].append(size)
            data["referrer"].append(referrer)
            data["user_agent"].append(user_agent)
    return pd.DataFrame(data)

df = parse_log_file("../access.log")
{{< /highlight >}}

### Generating session-level features

Now that we parsed the log file and have it available for further processing, we can window the dataframe to group sessions of same IPs together, and compute some metrics at a session-level, which will become useful features to apply more detection rules.

For example, we will compute the following :

{{< highlight python >}}
def get_session_attributes(df, aggregation_level="hour"):
    """
    Aggregates a dataframe of logs and turns it into the following format :
    host | date | hour | number_requests_[GET|POST|HEAD] | number_requests_total | mean_request_interarrival_time |
    127.** | 2020-03-20 | 04 | 25 | 12 | ... |
    """

    # Get the columns to aggregate onto
    aggregation_levels = {"day": ["host", "day"], "hour": ["host", "day", "hour"]}
    if aggregation_level not in aggregation_levels:
        raise ValueError(f"aggregation_level must be one of f{aggregation_levels}.")
    aggregation_columns = aggregation_levels[aggregation_level]

    # Window the dataframe to get the preceding timestamp of each request
    df = df.sort_values(by=aggregation_columns + ["timestamp"], ascending=True)
    df["timestamp_previous"] = df.groupby(aggregation_columns)["timestamp"].shift(1)
    df["timestamp_previous"] = pd.to_datetime(df["timestamp_previous"], utc=True)
    df["request_time_delta"] = (
        df["timestamp"] - df["timestamp_previous"]
    ).dt.total_seconds()

    aggregated_df = (
        df.groupby(aggregation_columns)
        .agg(
            number_requests_GET=pd.NamedAgg(
                column="request",
                aggfunc=(lambda req: (req.str.startswith("GET")).sum()),
            ),
            number_requests_HEAD=pd.NamedAgg(
                column="request",
                aggfunc=(lambda req: (req.str.startswith("HEAD")).sum()),
            ),
            number_requests_POST=pd.NamedAgg(
                column="request",
                aggfunc=(lambda req: (req.str.startswith("POST")).sum()),
            ),
            number_requests_no_referrer=pd.NamedAgg(
                column="referrer",
                aggfunc=(lambda req: (req.str.startswith('"-"')).sum()),
            ),
            number_requests_total=pd.NamedAgg(column="request", aggfunc="count"),
            avg_request_interarrival_time=pd.NamedAgg(
                column="request_time_delta", aggfunc="mean"
            ),
        )
        .reset_index()
    )

    aggregated_df["HEAD_requests_ratio"] = (
        aggregated_df["number_requests_HEAD"] / aggregated_df["number_requests_total"]
    )
    aggregated_df["GET_requests_ratio"] = (
        aggregated_df["number_requests_GET"] / aggregated_df["number_requests_total"]
    )
    aggregated_df["POST_requests_ratio"] = (
        aggregated_df["number_requests_POST"] / aggregated_df["number_requests_total"]
    )
    aggregated_df["no_referrer_requests_ratio"] = (
        aggregated_df["number_requests_no_referrer"]
        / aggregated_df["number_requests_total"]
    )
    # Add your other features here
    return aggregated_df
{{</ highlight >}}


{{< highlight python >}}
hour_sessions = get_session_attributes(requests, aggregation_level="hour")
day_sessions = get_session_attributes(requests, aggregation_level="day")
{{</ highlight >}}

### Rules implementation

Here we can create a few functions that return IP addresses that matched the rules defined above
{{< highlight python >}}
def has_robots_txt_request(requests_df):
    """:returns hosts that once requested the `robots.txt` file"""
    return requests_df[requests_df["request"].str.contains("robots.txt")][
        "host"
    ].unique()


def has_bot_name_in_user_agent(requests_df, known_bot_names=None):
    """:returns hosts that had a known bot name appear at least once in their user-agent"""
    if known_bot_names is None:
        known_bot_names = ["Googlebot", "bingbot", "bot", "crawler", "spider"]
    filter_condition = "|".join(known_bot_names).lower()
    df_bots = requests_df[
        requests_df["user_agent"].str.lower().str.contains(filter_condition)
    ]["host"].unique()
    return df_bots


def has_low_request_interrarival_time(
    sessions_df,
    threshold_request_interarrival_time=20,
    threshold_number_requests_no_referrer=30,
):
    """
    :returns hosts that have an average inter-request time below `threshold_request_interarrival_time` (seconds) across
    their daily sessions. In an attempt to avoid false positives on sub-sequent requests for assets of a page, only
    sessions with more than `number_requests_no_referrer` are considered.
    """
    df_bots = sessions_df[
        (
            sessions_df["number_requests_no_referrer"]
            > threshold_number_requests_no_referrer
        )
        & (
            sessions_df["avg_request_interarrival_time"]
            < threshold_request_interarrival_time
        )
    ]
    return df_bots["host"].unique()


def has_high_number_requests(sessions_df, threshold=1500):
    """
    :returns hosts that had more than `threshold` requests in one of their sessions
    """
    return sessions_df[sessions_df["number_requests_total"] > threshold][
        "host"
    ].unique()
{{</ highlight >}}

### Results

Here are some statistics obtained for all logs from 2015 to 2020 :

- Among the 68 000 unique IPS, 10% of them were classified as potential bots by our algorithm.
- Among the 5 million requests, 80% were classified as bot traffic. According to [this article](https://www.techradar.com/news/bad-bots-are-responsible-for-a-fifth-of-all-web-traffic), 20% of the overall web traffic comes from bots. Given the simplicity of our algorithm, it is most probable that it flags a lot of false positives, as we will see very soon.
- Over the 4 million requests flagged as potential bots:
    - 18% were because of a request to the `robots.txt` file. Hence, at least 18% of the bots might be "good" bots, as they announce themselves as bots by reqeusting this file.
    - 3% had the word "bot", “crawler" ou “spider" in their user agent
    - 58% did at least 100 requests in less than an hour, with an average inter request time under 20 seconds.
    - 54% did at least 1000 requests in less than a day, with an average inter request time under 20 seconds.
    - 91% once did more than 100 requests in an hour
    - 96% once did more than 1000 requests in a day

Those last two thresholds are most probably the most wrong ones. In fact, if you open the chrome console and inspect the number of requests triggered when visiting [almhuette-raith.at](http://www.almhuette-raith.at/), you will notice that it amounts to 33. Hence, a user that often visits the website, maybe the administrator of the website, would be flagged as a bot.
Of course, our system is a quick and dirty POC that does not aim to be deployed in production.


## Next steps

- Further analysis should be performed on the implemented rules to ensure no false positives are flagged, and a minimum of positives is missed
- For now, the script only prints the IPs and doesn't take any further action.
 In a real world scenario, the list of IPs could be inserted into a database to be regularly cached at the Apache server
  level, for example (more information about dynamic blacklisting [here](https://stackoverflow.com/questions/4676954/dynamically-update-apache-config-allow-from-ip-without-a-restart-reload))
- In the output dataframe, boolean columns should be added for each IP, to know which condition(s) it matched to be flagged as a bot, for reporting purposes
- If the requests are to be analysed from a file (versus a stream), the job could be scheduled in something like Airflow. It would be good to avoid scheduling the analysis directly on the instance running the server, the best would be to schedule it in a container (that would have access to the log file) managed by Airflow or Kubernetes for example
- In addition to IP-blocking, other types of blocking could be explored : user-agent, cookies, request method etc (interesting ideas at https://perishablepress.com/eight-ways-to-blacklist-with-apaches-mod_rewrite/)
- Explore and implement relevant ad fraud rules : https://www.criteo.com/insights/best-practices-combating-click-fraud-data-series-part-2/

