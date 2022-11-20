// Different types of map layers
var stamenMap = L.tileLayer.provider('Stamen.Watercolor');
var osMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
var imageryMap = L.tileLayer.provider('Esri.WorldImagery');

// To allow switching functionality of map layers
var baseMaps = {
    OSM: osMap,
    'Stamen Watercolor': stamenMap,
    'World Imagery': imageryMap
}

// Coordinates for Carnival Mall
// var map = L.map('mapid').setView([-26.251581565897556, 28.318399382254157], 13);
var map = L.map('mapid', {
    center: [-26.251581565897556, 28.318399382254157],
    zoom: 13,
    layers: [osMap]
});

var geoServerIPPort = 'localhost:5500';
var geoServerWorkSpace = 'GIS';
var stateLayerName = 'GIS:ind_st';

var southAfricaProvinceLayer = L.tileLayer.wms (
    "http://" + geoServerIPPort + "/geoserver" + geoServerWorkSpace + "/wms",
    {
        layers: stateLayerName,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,
    }
)
// Marker for the exact location of Carnival Mall
var marker = L.marker([-26.251581565897556, 28.318399382254157]).addTo(map);
var marker2 = L.marker([-26.275042497360214, 28.453913539642063]).addTo(map);
var marker3 = L.marker([-26.352604489022465, 28.372624739644117]).addTo(map);
// Playing around with the radius
/*var circle = L.circle([-26.251581565897556, 28.318399382254157], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);*/

// Add a polygon around specified coordinates
/*var polygon = L.polygon([
    [-26.241581565897556, 28.318399382254157],
    [-26.251581565897556, 28.328399382254157],
    [-26.261581565897556, 28.338399382254157]
]).addTo(map);*/

marker.bindPopup("<b>Carnival Mall</b>").openPopup();
marker2.bindPopup("<b>Springs Mall</b>").openPopup();
marker3.bindPopup("<b>Tsakane Mall</b>").openPopup();

/* add a tile layer to add to our map, in this case it’s a Mapbox Streets tile layer. 
Creating a tile layer usually involves setting the URL template for the tile images, the attribution text and the maximum zoom level of the layer.
In this example we’ll use the mapbox/streets‐v11 tiles from Mapbox’s Static Tiles API (in order to use tiles from
Mapbox, you must also request an access token). Because this API returns 512x512 tiles by default (instead of
256x256), we will also have to explicitly specify this and o set our zoom by a value of -1. */

/*L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
*/

var mapLayers = L.control.layers(baseMaps).addTo(map);
