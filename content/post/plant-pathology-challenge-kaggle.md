---
title: "Plant Pathology Challenge Kaggle"
date: 2020-04-15T02:27:15+02:00
draft: false
---

## [DRAFT - WORK IN PROGRESS]

In this kaggle competition, we will learn how to train a convolutional neural network (CNN) for multi label classification.

### Problem statement

Misdiagnosis of the many diseases impacting agricultural crops can lead to misuse of chemicals leading to the emergence of resistant pathogen strains, increased input costs, and more outbreaks with significant economic loss and environmental impacts. Current disease diagnosis based on human scouting is time-consuming and expensive, and although computer-vision based models have the promise to increase efficiency, the great variance in symptoms due to age of infected tissues, genetic variations, and light conditions within trees decreases the accuracy of detection.

### Specific objectives

Objectives of ‘Plant Pathology Challenge’ are to train a model using images of training dataset to 
1) Accurately classify a given image from testing dataset into different diseased category or a healthy leaf
2) Accurately distinguish between many diseases, sometimes more than one on a single leaf
3) Deal with rare classes and novel symptoms
4) Address depth perception—angle, light, shade, physiological age of the leaf
5) Incorporate expert knowledge in identification, annotation, quantification, and guiding computer vision to search for relevant features during learning

### Exploratory data analysis (EDA)


* Exploratory data analysis
* Image augmentations
* Efficientnet training + decreasing LR

<iframe src="/custom_html/fig1_tpu.html" width="100%" height="600"></iframe>