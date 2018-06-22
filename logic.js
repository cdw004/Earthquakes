//Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
//Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
//Include popups that provide additional information about the earthquake when a marker is clicked.
//Create a legend that will provide context for your map data.
//Your visualization should look something like the map above.


//STORE URL (Past 7 days ALL)
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson" 

//SEE ACTIVITY 10 DAY 01

//L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=" +
//"pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ").addTo(myMap);


//key : pk.eyJ1IjoiYTA5OTg5MjE4IiwiYSI6ImNqaHR3NjBuaTAzcG8zcGt0eW51ODBvY2gifQ.iPNvWA8qzJOvu_FxNbEZIQ

// L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=" + "pk.eyJ1IjoiYTA5OTg5MjE4IiwiYSI6ImNqaHR3NjBuaTAzcG8zcGt0eW51ODBvY2gifQ.iPNvWA8qzJOvu_FxNbEZIQ"


//read json
d3.json(queryURL, function (data) {
    createFeatures(data.features)
});

function chooseColor(magnitude) {
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
    };
};
   // Define a function we want to run once for each feature in the features array

function createFeatures(earthquakeData) {
    function onEachFeature(feature, layer) {
        var days=['Sun', 'Mon','Tues',"Weds",'Thurs',"Fri","Sat"]
        var timestamp = new Date(feature.properties.time);
        var day = days[timestamp.getDay()];
        var date = timestamp.getDate();
        var hours = timestamp.getHours();

   // Binding a pop-up to each layer

        layer.bindPopup(`Location: ${feature.properties.place}
            <hr>
            Magnitude: ${feature.properties.mag}
            <hr>
            Day: ${days}`);
    };

    var earthquakes = L.geoJSON(earthquakeData, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: Math.pow(2,feature.properties.mag),
                fillColor: chooseColor(feature.properties.mag),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: onEachFeature
    });
    createMap(earthquakes);
};

function createMap(earthquakes) {
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=" + "pk.eyJ1IjoiYTA5OTg5MjE4IiwiYSI6ImNqaHR3NjBuaTAzcG8zcGt0eW51ODBvY2gifQ.iPNvWA8qzJOvu_FxNbEZIQ");
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [streetmap, earthquakes]
    });
    var legend = L.control({ position: 'bottomright' });
    
        legend.onAdd = function (map){
            var div = L.DomUtil.create('div', 'info legend'),
            grades = [0,1,2,3,4,5],
            labels =[];

        };
        legend.addTo(myMap);
};