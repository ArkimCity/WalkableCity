var map1;
var map2;
var map3;
var map4;

var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
var london = { lat: 51.51531377742486 ,lng: -0.1276970532377955 };
var tokyo = { lat: 35.682636526307334 ,lng: 139.76850437605137 };
var newyork = { lat: 40.7124988481609 ,lng: -74.00921376413213 };

var button1 = document.getElementById('button1');
button1.addEventListener('click', scaleReset);

var temp;

function input(){
var input = document.getElementById("input").value;
temp = input;
}

function initMap() {
    map1 = new google.maps.Map( document.getElementById('map1'), {
        zoom: 12,
        center: seoul
    });

    map2 = new google.maps.Map( document.getElementById('map2'), {
        zoom: 12,
        center: london
    });

    map3 = new google.maps.Map( document.getElementById('map3'), {
        zoom: 12,
        center: tokyo
    });
 
    map4 = new google.maps.Map( document.getElementById('map4'), {
        zoom: 12,
        center: newyork
    });
}

function scaleReset(){
    var input = document.getElementById("input").value;
    temp = input;
  map1.setZoom(temp);
  map2.setZoom(temp);
  map3.setZoom(temp);
  map4.setZoom(temp);
}