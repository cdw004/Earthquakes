//Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
//Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
//Include popups that provide additional information about the earthquake when a marker is clicked.
//Create a legend that will provide context for your map data.
//Your visualization should look something like the map above.


//STORE URL (Past 7 days ALL)
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson" 

//read json
d3.json(queryURL, function (data) {
    createFeatures(data.features)
});

function color(magnitude) {
    if (magnitude <1) {
        return "#228B22" //green
    }
    if (magnitude <2) {
        return "#32CD32" //light green
    }
    if (magnitude <3) {
        return "#FFFF00" //yellow
    }
    if (magnitude <4) {
        return "#FFA500" //orange
    }
    if (magnitude <5) {
        return "#FF4500" //orange red
    }
    if (magnitude <6) {
        return "#FF6347" //tomato
    };
};
   // Define a function we want to run once for each feature in the features array

function createFeatures(earthquakeData){
   function onEachFeature(feature, layer)
    var days=['Sun', 'Mon','Tues',"Weds",'Thurs',"Fri","Sat"]
    
}