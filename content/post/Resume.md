+++
banner = "banners/placeholder.png"
categories = ["Lorem"]
date = "2015-06-24T13:50:46+02:00"
menu = ""
tags = []
title = "Resume - Cyril LAY"
+++

## Skills and random achievements
----

### Data Engineering
\
#### Druid (real time database) : 
- Deployed from end-to-end a [mechanism](https://druid.apache.org/docs/latest/development/extensions-core/lookups-cached-global.html) for joining fact tables and dimension tables (that are constantly updated in another mySQL database) at query time.  
*Impact* : __Saved engineering time : no need to alter the ETL and Spark jobs for every new field required by the buiness. The lookups are now dynamic, and the mappings can change without having to reprocess and backfill historical data.__

#### Kafka
- Deployed monitoring and managment tools for Kafka ([Cruise Control](https://github.com/linkedin/cruise-control) and [CCFE](https://github.com/linkedin/cruise-control-ui) by linkedin) accross multiple Kafka clusters of the company. Dockerized both applications and added CI/CD pipelines with Drone for automated deployment on ECS.  
*Impact* : __Reduced the required engineering time for scaling up/down and rebalancing any kafka clusters by 90%.__

#### Spark
- Switched from RDD operations to use the Dataframe and typed Dataset API, for better performance using Spark Catalyst and Tungsten optimizations
- Added [new configuration](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html#emr-spark-maximizeresourceallocation) in EMR for automatically setting spark parameters (memory, parallelism, number of executors, of cores per executor...) depending on the cluster size and hardware.  
*Impact* : Better performance and divided job duration by 5 on certain jobs, saved AWS cost.

---------
### Data science
\
#### Keras on Tensorflow - Python
- Built a public REST API ([link](../restnet50-classification-rest-api/)) accepting image urls and returning classification labels using pre-trained neural networks.

#### Keras on Tensorflow - R
- Built high performance models for 3 datasets. After a process of feature engineering, hyper parameters tuning and model training, I selected the best model for each problem, which were SVR (predicting the future yield of a farm), Random forest (3-class astronomical objects classification), and I used the pretrained ResNet50 for the image labeling problem.