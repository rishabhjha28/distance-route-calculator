new google.maps.places.SearchBox(
  document.getElementById("origin")
);
new google.maps.places.SearchBox(
  document.getElementById("destination")
);
var myLatLng = { lat: 21.14591744199283, lng: 79.08558397978322 };
var mapOptions = {
  center: myLatLng,
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);

function findRoute() {
  var request = {
    origin: document.getElementById("origin").value,
    destination: document.getElementById("destination").value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  }
  if (request.origin == "" || request.destination == "") {
    document.querySelector('p.inline').innerHTML = "";
    document.querySelector("div.statement p").innerHTML = "Please Enter Origin And Destination"
  }
  else {
    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        document.querySelector('p.inline').innerHTML = result.routes[0].legs[0].distance.text;
        document.querySelector("div.statement p").innerHTML = "The Distance Between <strong>" + request.origin + "</strong> and <strong>" + request.destination + "</strong> is <strong>" + result.routes[0].legs[0].distance.text + "</strong>"
        directionsDisplay.setDirections(result);
      } else {
        document.querySelector('p.inline').innerHTML = "No Driving Distance";
        document.querySelector("div.statement p").innerHTML = "The Driving Distance Between <strong>" + request.origin + "</strong> and <strong>" + request.destination + " Doesn't Exist</strong>"
        directionsDisplay.setDirections({ routes: [] });
        map.setCenter(myLatLng);
      }
    })
  }
}