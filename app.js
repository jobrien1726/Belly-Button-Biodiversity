// Use d3 to read in the json file
d3.json("data/samples.json").then((data) => {

    //Save the dropdown menu to a variable and clear all existing options
    var dropDownMenu = document.getElementById("selDataset");
    dropDownMenu.options.length = 0;

    //Populate the dropdown Menu w ids from json file
    console.log(data.names);
    for (i=0; i< data.names.length; i++) {
        dropDownMenu.options[dropDownMenu.options.length] = new Option(data.names[i], i);
    }


})