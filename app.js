//Function to Initialize Page w Default Plots
function init() {
    var dropDownMenu = d3.select("#selDataset");

    //Populate Drop Down Menu w Sample Ids
    d3.json("data/samples.json").then((data) => {
        var sampleIds = data.names;
        sampleIds.forEach((sample) => {
            dropDownMenu.append("option")
                .text(sample)
                .property("value", sample);
        });

        //Build Initial Plots w Data from Id 940
        var sample = sampleIds[0];
        buildMetadata(sample)
        buildCharts(sample)
    });

}

function buildMetadata(sample) {
    console.log(sample);

    d3.json("data/samples.json").then((data) => {
        var metadata = data.metadata;
        var filteredData = metadata.filter(metadata => metadata.id == sample);
        var result = filteredData[0];
        console.log(result);

        var metadataPanel = d3.select("#sample-metadata");
        metadataPanel.html("");

        Object.entries(result).forEach(function([key, value]) {
            var newList = metadataPanel.append("ul");
            var newListItem = newList.append("li");
            newListItem.text(key + " : " + value);
        })
    });

}

function buildCharts(sample) {

    d3.json("data/samples.json").then((data) => {
        var samples = data.samples;
        var filteredData = samples.filter(samples => samples.id == sample);
        var result = filteredData[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        //Set Horizontal Bar Chart Data and Layout
        var yticks = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();

        var barData = [{
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            xaxis: {title: "Sample Value"},
            yaxis: {title: "OTU ID"}
        }

        Plotly.newPlot("bar", barData, barLayout);

        //Set Bubble Chart Data and Layout
        var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }]

        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Sample Value"} 
        };

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    })
}

function optionChanged(sample) {
    buildMetadata(sample);
    buildCharts(sample);
}

init();