var positions = [
  {lng: 116.4494, lat: 39.994247},
  {lng: 116.495105, lat: 39.962843},
  {lng: 116.496543, lat: 39.912389},
  {lng: 116.492231, lat: 39.85503},
  {lng: 116.485907, lat: 39.848383},
  {lng: 116.472396, lat: 39.840405},
  {lng: 116.429565, lat: 39.837968},
  {lng: 116.300497, lat: 39.837081},
  {lng: 116.289861, lat: 39.858353}
];
for (var i = 0, len = positions.length; i < len; i++) {
  positions[i].lng = positions[i].lng - 0.006;
  positions[i].lat = positions[i].lat - 0.007;
}
var positions_length = positions.length;
var map;
var index = 0;
var marker;
var timer;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lng: 116.4494, lat: 39.994247},
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    panControl: true,
    zoomControl: true,
    streetViewControl: true
  });
  marker = new RichMarker({
    map: map,
    position: new google.maps.LatLng(positions[0].lat, positions[0].lng),
    draggable: true,
    flat: true,
    anchor: RichMarkerPosition.MIDDLE,
    content: '<div class="pin"></div><div class="pin-effect"></div>'
  });
  google.maps.event.addListener(marker, 'position_changed', function() {
    console.log('Marker position: ' + marker.getPosition());
  });
  timer = setInterval("setPos()",1000);
}
function setPos() {
  // console.log("index " + index);
  console.log(marker);
  if (index < positions_length){
    var latlng = new google.maps.LatLng(positions[index].lat, positions[index].lng);
    marker.setPosition(latlng);
    // map.setCenter(latlng);
    index ++;
  } else {
    clearInterval(timer);
  }
}
google.maps.event.addDomListener(window, 'load', initMap);
