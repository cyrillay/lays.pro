---
title: "Bot detection POC"
date: 2020-04-15T00:30:03+02:00
draft: false
---

<!-- -- DRAFT - WORK IN PROGRESS -- -->

The goal of this project was to create a POC for a bot detection system, by using a data file containing all HTTP requests to a server.
As an example, we'll use logs from the website http://www.almhuette-raith.at.

In order to identify the traffic coming from bots, we will analyse the sessions from individual IP adresses. In other words, for each IP adress, we will consider their sequences of HTTP requests during a specific timeframe.

* what features we have in the base dataset
* what features we will generate for each session (mean time between requests, mean time between sessions, number of requests during the session, proportion of GET requests vs POST requests...
* How we are going to read the data and parse it (attention to file size)
* a few plots, outliers examination, etc
* next steps
* Add credits, sources



En données d’entrée, nous avons un fichier `access.log`, historique complet de toutes les requêtes HTTP vers le serveur de http://www.almhuette-raith.at. Il est important de noter que ce fichier est assez gros (presque 1go), car il semblerait qu’il contient toutes les requêtes depuis décembre 2015. Dans le futur, ou dans le cas d’un autre site plus fréquenté, cela pourrait poser des soucis de scaling, car la taille du fichier ne va cesser d’augmenter, de l’ordre de 1 Mo par 10 000 requêtes.

This dataset is filtered to only keep the traffic coming from bots, using 7 detection rules : 
Presence of a request to the ‘robots.txt’ file
A bot name in the user agent (Googlebot, AdsBot-Google, BingBot…).
The mean time spent per page is below 0.5 seconds
The referrer is empty for the first request of the session, all the page requests or even all the HTTP requests of the session
All requests are HEAD instead of the more common GET
The image to page ratio requests is zero
Only one request in the session

