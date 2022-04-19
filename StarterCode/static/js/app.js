// Day 2 - 06 Romans
//Day 3 - 09 Dropdown events

function getData(){
    //Use D3 to select dropdown menu item
    var dropDownMenu = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
    var samples = data.names;

    });
    
}

// Create horizonatal bar chart
// create trace
let trace1 = {
    x: otu_ids
    y: sample_values
    text: otu_labels
    type: "bar",
    orientation: "h"
};

// Create data array for flot
let barData = [trace1];

//Define plot layout
let layout1 = {
    title: "Top Ten OTUs By Individual"
};

// Render 
Plotly.newPlot(bar,barData,layout1);

// Create bubble chart
// Reference: https://plotly.com/javascript/bubble-charts/ 
// Plotly.newPlot(bubble,bubbleData,layout2)