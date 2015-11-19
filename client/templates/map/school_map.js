Template.schoolMap.onRendered(function() {
  GoogleMaps.load();
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

Template.schoolMap.onCreated(function() {

  // use the 'ready' callback to interact with the API once the map is ready
  GoogleMaps.ready('map', function(map) {

  	// returns the NE/SW bounds of the map
		function get_bounds(){
			return {
        nelat : GoogleMaps.maps.map.instance.getBounds().getNorthEast().lat(),
        nelng : GoogleMaps.maps.map.instance.getBounds().getNorthEast().lng(),
        swlat : GoogleMaps.maps.map.instance.getBounds().getSouthWest().lat(),
        swlng : GoogleMaps.maps.map.instance.getBounds().getSouthWest().lng()
			};
		}

		// call for bounds whenever the map is finished being panned or zoomed
		new google.maps.event.addListener( map.instance , 'idle' , function(){
			console.log( get_bounds() );
		});

    // template for adding a marker to the map
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

  });
});