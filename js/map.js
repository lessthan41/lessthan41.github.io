//setting
var izone = ol.proj.fromLonLat([121.522807,25.0666052]);
var yuzhi = ol.proj.fromLonLat([121.534315,25.0561904]);
var NTU = ol.proj.fromLonLat([121.5375631,25.0173405]);
var play9S = ol.proj.fromLonLat([121.5698346,25.0799179]);
var NTHU = ol.proj.fromLonLat([120.970713,24.7952275]);

var view = new ol.View({
  center: ol.proj.fromLonLat([121.302993,24.998757]),
  zoom: 9.2
})

var raster = new ol.layer.Tile({
      source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        url: 'http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
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

  // Marker3
  var marker3 = new ol.Overlay({
    position: NTU,
    positioning: 'center-center',
    element: document.getElementById('marker3'),
    stopEvent: false
  });
  map.addOverlay(marker3);

   // Marker4
  var marker4 = new ol.Overlay({
    position: play9S,
    positioning: 'center-center',
    element: document.getElementById('marker4'),
    stopEvent: false
  });
  map.addOverlay(marker4);

  // Marker5
  var marker5 = new ol.Overlay({
    position: NTHU,
    positioning: 'center-center',
    element: document.getElementById('marker5'),
    stopEvent: false
  });
  map.addOverlay(marker5);

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

 // Popup3
 var popup3 = new ol.Overlay({
   element: document.getElementById('popup3')
 });
 popup3.setPosition(NTU);
 map.addOverlay(popup3);

 // Popup4
 var popup4 = new ol.Overlay({
   element: document.getElementById('popup4')
 });
 popup4.setPosition(play9S);
 map.addOverlay(popup4);

// Popup5
var popup5 = new ol.Overlay({
  element: document.getElementById('popup5')
});
popup5.setPosition(NTHU);
map.addOverlay(popup5);