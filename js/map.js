//setting
var izone = ol.proj.fromLonLat([121.522807,25.0666052]);
var yuzhi = ol.proj.fromLonLat([121.534315,25.0561904]);

var view = new ol.View({
  center: ol.proj.fromLonLat([121.5267749,25.0626613]),
  // minZoom: 7.2,
  zoom: 13.5
})

var raster = new ol.layer.Tile({
      source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        url: 'https://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
      })
    })

// -------------------------------------------------------------
//map init
var map = new ol.Map({
  target: 'map',
  layers: [raster],
  // stop zooming with scroll
  view: view
});

// Marker1
 var marker1 = new ol.Overlay({
   position: izone,
   positioning: 'center-center',
   element: document.getElementById('marker1'),
   stopEvent: false
 });
 map.addOverlay(marker1);

 // Marker2
  var marker2 = new ol.Overlay({
    position: yuzhi,
    positioning: 'center-center',
    element: document.getElementById('marker2'),
    stopEvent: false
  });
  map.addOverlay(marker2);


 // Popup1
 var popup1 = new ol.Overlay({
   element: document.getElementById('popup1')
 });
 popup1.setPosition(izone);
 map.addOverlay(popup1);

 // Popup2
 var popup2 = new ol.Overlay({
   element: document.getElementById('popup2')
 });
 popup2.setPosition(yuzhi);
 map.addOverlay(popup2);
