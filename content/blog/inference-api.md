+++
title = "Building an image classification inference API in 30 minutes with deep learning"
description = ""
date = "2019-03-08"
author = "Cyril Lay"
sec = 8
+++

## Introduction

I built a simple inference API backed by the famous pretrained CNN model [ResNet50](https://www.mathworks.com/help/deeplearning/ref/resnet50.html). The network is 50 layers deep and can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.
Currently, the API is running on the same machine hosting this website : a simple t2.micro on AWS EC2. It is available at <http://datascience.lays.pro>.

## UI

{{< figure src="/images/inference-api-screenshot.png" width="100%">}}

## Architecture

{{< figure src="/images/architecture.png" width="100%">}}

## Command line usage

Download an image, and submit it with :

`$ curl -X POST -F image=@IMAGE_NAME.jpg 'http://lays.pro:5000/predict'`

You should receive a JSON response with the following structure : 
```
{
	"predictions":[
		{"label":"Indian_elephant","probability":0.7532103657722473},
		{"label":"tusker","probability":0.12444225698709488},
		{"label":"African_elephant","probability":0.12229373306035995},
		{"label":"water_buffalo","probability":2.685574690985959e-05},
		{"label":"Chesapeake_Bay_retriever","probability":7.5970979196426924e-06}
	],
	"success":true
}
```

This means that the image you sent was classified as an Indian Elephant by ResNet50, with a probability score of 75%.

The short, full code of the back-end is available [here](https://github.com/cyrillay/inference-api-backend/blob/master/run_keras_server.py).

## Roadmap

- New endpoints for different models : threat classification, edge detection...
- Dockerize the app and automate the deployment of new models

## Updates
- 13/07/19 : Swapped Resnet50 with Inception V3
- 09/07/19 : Added CI/CD for the front-end