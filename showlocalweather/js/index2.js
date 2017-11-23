//apikey = b014f849e82ec975a59290297408c2ba


$(function(){

  var C = false;
  var apiData;

//this function is for toggling the temp to C and F
  function displayTemp (F, C) {
    if (C) return Math.round((F-32)*(5/9)) + '&deg; C';
    return Math.round(F) + '&deg; F';
  }

//function render

$.getJSON('https://freegeoip.net/json/').done(function(location) {
  console.log(location);
  $('#country').html(location.country_name);
  $('#city').html(location.city);
  $('#latitude').html(location.latitude);
  $('#longitude').html(location.longitude);



  })




})
