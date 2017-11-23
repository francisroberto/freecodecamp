$(function() {

})
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  processLocationDetails(position);

  processWeatherDetails(position);
}

function processLocationDetails(position) {
 var GEOCODING =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    position.coords.latitude +
    "%2C" +
    position.coords.longitude +
    "&language=en";

  $.getJSON(GEOCODING).done(function(location) {
    // create new json to easily access the values
    var locationDetails = {
       country: "",
       state: "",
       city: "",
       address: location.results[0].formatted_address,
       latitude: position.coords.latitude,
       longitude: position.coords.longitude
     };
    // output location details in UI
    outputLocationDetails(locationDetails);
  })
}

//function getCountryStateCity(addressComponent) {
  // addressComponent is array of hashes
  // foreach item in addressComponent,
  //

  /*
         "address_components" : [
            {
               "long_name" : "Unnamed Road",
               "short_name" : "Unnamed Road",
               "types" : [ "route" ]
            },
            {
               "long_name" : "South Australia",
               "short_name" : "SA",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Australia",
               "short_name" : "AU",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "5724",
               "short_name" : "5724",
               "types" : [ "postal_code" ]
            }
*/
  // find in list of hashes the item with type "country"

//}

function outputLocationDetails(locationDetails) {
  $("#country").html(locationDetails.country);
  $("#state").html(locationDetails.state);
  $("#city").html(locationDetails.city);
  $("#address").html(locationDetails.address);
  $("#latitude").html(locationDetails.latitude);
  $("#longitude").html(locationDetails.longitude);
}

function processWeatherDetails(position) {
  var weather =
    "http://api.openweathermap.org/data/2.5/weather?lat=-27.2283542&lon=153.01631609999998&units=metric&appid=b014f849e82ec975a59290297408c2ba";

  $.getJSON(weather).done(function(details) {
    var weatherDetails = {
       currentWeather: details.weather[0].description,
       currentTemp: details.main.temp
     };
    // output location details in UI
    outputWeatherDetails(weatherDetails);
  });
}

function outputWeatherDetails(weatherDetails) {
  $("#currentTemp").html("TempTest");
  $("#currentWeather").html("weather Test");
  $("#currentTemp").html(weatherDetails.currentTemp);
  $("#currentWeather").html(weatherDetails.currentWeather);
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
