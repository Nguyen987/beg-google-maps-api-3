(function() {
  
  // Creating an array that will contain all of our weather icons
  var weatherIcons = [];
  
  weatherIcons['clouds'] = new google.maps.MarkerImage(
    'img/clouds.png', 
    new google.maps.Size(48, 48), 
    null, 
    new google.maps.Point(24, 24)
  );
  
  weatherIcons['rain'] = new google.maps.MarkerImage(
    'img/rain.png', 
    new google.maps.Size(48, 48), 
    null, 
    new google.maps.Point(24, 24)
  );
  
  weatherIcons['sun'] = new google.maps.MarkerImage(
    'img/sun.png', 
    new google.maps.Size(48, 48), 
    null, 
    new google.maps.Point(24, 24)
  );

  window.onload = function() {
    
    // Creating a map
    var options = {  
      zoom: 3,  
      center: new google.maps.LatLng(37.09, -95.71),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };  
    var map = new google.maps.Map(document.getElementById('map'), options);  
    
    // Creating a JSON object with weather data
    var weatherData = {'weather': [
      {
        'lat': 40.756054,
        'lng': -73.986951,
        'weatherType': 'clouds'
      },
      {
        'lat': 47.620973, 
        'lng': -122.347276,
        'weatherType': 'rain'
      },
      {
        'lat': 37.775206,
        'lng': -122.419209,
        'weatherType': 'sun'
      }
    ]};
        
    // Looping through the weather array in weatherData
    for (var i = 0; i < weatherData.weather.length; i++) {

      // creating a variable that will hold the current weather object
      var weather = weatherData.weather[i];
      
      // Creating marker
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(weather.lat, weather.lng), 
        map: map,
        icon: weatherIcons[weather.weatherType]
      });  

    }
    
  }
})();