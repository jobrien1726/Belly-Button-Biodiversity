# Belly Button Biodiversity

## Project Overview

The goal of this project was to use JavaScript and Plotly to create an interactive dashboard to explore the [Belly Button Biodiversity dataset](data/samples.json), which catalogs the microbes that colonize human navels. The code was written in JS and uses D3 libraries to fetch data from a json file to build graphs using Plotly and to deploy to a static html page.

## Background

This project aims to build an interactive dashboard based on the research by D.Fergus and S.Council looking at the biodiversity of the microbies that populate human navels -- a fancy word for belly button. They published the results from 60 belly buttons http://robdunnlab.com/projects/belly-button-biodiversity/ It turns out that just a eigth of these bugs are very common and present in more than 70% of the people. If you are curious after playing with the dashboard go to the web page and read the reseach. Worth mentioning that bugs are clasified by specific numbers. The so call operationa taxonimic units, i.e. OTU are specific for each microbial species.

## Technologies Used

- JavaScript
- HTML
- Bootstrap
- D3.js
- Plotly.js

![](images/dashboard.png)

## Dashboard

### Dropdown Menu

An interactive dropdown menu which displays a complete list of test subject ID numbers and allows the user to choose which test subject data to view. All of the following plots update each time a new text subject is chosen. 

### Demographic Info

A panel of the sample metadata, i.e. an individual's demographic information, is displayed for each test subject. It includes the folling information:

- ID number
- ethnicity
- gender
- age
- location
- belly button type ("Innie" vs. "Outtie")
- washing frequency (scrubs per week)

### Horizontal Bar Chart

A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.

Features:

- Used sample_values as the values for the bar chart.
- Used otu_ids as the labels for the bar chart.
- Used otu_labels as the hovertext for the chart.

### Bubble Chart

A bubble chart that displays each sample.

Features:

- Used otu_ids for the x values.
- Used sample_values for the y values.
- Use sample_values for the marker size.
- Use otu_ids for the marker colors.
- Use otu_labels for the text values.




