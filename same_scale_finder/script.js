var map1;
var map2;
var map3;
var map4;


var seoul = { lat: 37.5642135, lng: 127.0016985 };
var london = { lat: 51.51531377742486, lng: -0.1276970532377955 };
var tokyo = { lat: 35.682636526307334, lng: 139.76850437605137 };
var newyork = { lat: 40.7124988481609, lng: -74.00921376413213 };

var button1 = document.getElementById('button1');
button1.addEventListener('click', scaleReset);

function initMap() {
    map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 12,
        center: seoul
    });

    map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 12,
        center: london
    });

    map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 12,
        center: tokyo
    });

    map4 = new google.maps.Map(document.getElementById('map4'), {
        zoom: 12,
        center: newyork
    });
}

function scaleReset() {
    var input = parseInt(document.getElementById("input").value);
    map1.setZoom(input);
    map2.setZoom(input);
    map3.setZoom(input);
    map4.setZoom(input);
}

function myFunction(event) {
    var y = event.deltaY;
    let currentZoom = map1.zoom;
    if (y > 0) {
        map1.setZoom(currentZoom + 1);
        map2.setZoom(currentZoom + 1);
        map3.setZoom(currentZoom + 1);
        map4.setZoom(currentZoom + 1);
    } else {
        map1.setZoom(currentZoom - 1);
        map2.setZoom(currentZoom - 1);
        map3.setZoom(currentZoom - 1);
        map4.setZoom(currentZoom - 1);
    }
}