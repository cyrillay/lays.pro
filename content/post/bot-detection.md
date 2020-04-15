---
title: "Bot detection POC"
date: 2020-04-15T00:30:03+02:00
draft: false
---

## [DRAFT - WORK IN PROGRESS]

The goal of this project was to create a POC for a bot detection system, by using a data file containing all HTTP requests to a server.
As an example, we'll use logs from the website http://www.almhuette-raith.at.

In order to identify the traffic coming from bots, we will analyse the sessions from individual IP adresses. In other words, for each IP adress, we will consider their sequences of HTTP requests during a specific timeframe.

# Summary
* what features we have in the base dataset
* How we can identify bot traffic from those features, what features would be useful to have
* Generating the new features (mean time between requests, mean time between sessions, number of requests during the session, proportion of GET requests vs POST requests...)
* How we are going to read the data and parse it (attention to file size)
* a few plots, outliers examination, etc
* next steps
* Add credits, sources


