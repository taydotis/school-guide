Template.schoolMap.onRendered(function() {
  GoogleMaps.load();
});

Template.schoolMap.onCreated(function() {

  // use the 'ready' callback to interact with the API once the map is ready
  GoogleMaps.ready('map', function(map) {

		// listen for when the map is finished being panned or zoomed
		new google.maps.event.addListener( map.instance , 'idle' , function(){

      // get the coordinate bounds of the map
			var nelat = GoogleMaps.maps.map.instance.getBounds().getNorthEast().lat();
      var nelng = GoogleMaps.maps.map.instance.getBounds().getNorthEast().lng();
      var swlat = GoogleMaps.maps.map.instance.getBounds().getSouthWest().lat();
      var swlng = GoogleMaps.maps.map.instance.getBounds().getSouthWest().lng();

      // get all the schools in the database
      var schools = Schools.find().fetch();

      // iterate through each school, only showing the schools that are within the current bounds
      schools.forEach( function(school){
        if (school.coordinates.lat < nelat && school.coordinates.lat > swlat && school.coordinates.lng < nelng && school.coordinates.lng > swlng) {
          
          // test if results are limited by bounds
          console.log(school.name);

          // test adding school marker to the map
          var marker = new google.maps.Marker({
            position: school.coordinates,
            map: map.instance
          });
        }

      });
		});
  });
});

Template.schoolMap.helpers({
  mapOptions: function() {
    // make sure the API has loaded
    if (GoogleMaps.loaded()) {
      // set options for map initialization
      return {
        center: new google.maps.LatLng(36.1667, -86.7833),
        zoom: 12,
        streetViewControl: false
      };
    }
  }
});