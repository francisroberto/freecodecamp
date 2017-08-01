navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  processLocationDetails(position);
  
  var weatherDetails = getWeatherDetails(position); 
  outputWeatherDetails(weatherDetails);
}

function processLocationDetails(position) {
 var GEOCODING =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    position.coords.latitude +
    "%2C" +
    position.coords.longitude +
    "&language=en";

  var details;
  
  $.getJSON(GEOCODING).done(function(location) {
    locationDetails = {
       country: location.results[0].address_components[5].long_name,
       state: location.results[0].address_components[4].long_name,
       city: location.results[0].address_components[2].long_name,
       address: location.results[0].formatted_address,
       latitude: position.coords.latitude,
       longitude: position.coords.latitude
     };
    outputLocationDetails(locationDetails);
  });

  return details;
}
function outputLocationDetails(locationDetails) {
  $("#country").html(locationDetails.country);
  $("#state").html(locationDetails.state);
  $("#city").html(locationDetails.city);
  $("#address").html(locationDetails.address);
  $("#latitude").html(locationDetails.latitude);
  $("#longitude").html(locationDetails.longitude);
}

function getWeatherDetails(position) {

}

function outputWeatherDetails(weatherDetails) {
}
  
  
  
  /*
  var GEOCODING =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    position.coords.latitude +
    "%2C" +
    position.coords.longitude +
    "&language=en";

  $.getJSON(GEOCODING).done(function(location) {
    $("#country").html(location.results[0].address_components[5].long_name);
    $("#state").html(location.results[0].address_components[4].long_name);
    $("#city").html(location.results[0].address_components[2].long_name);
    $("#address").html(location.results[0].formatted_address);
    $("#latitude").html(position.coords.latitude);
    $("#longitude").html(position.coords.longitude);
  });
*/

function error(err) {
  console.log(err);
}