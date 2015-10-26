Template.schoolMap.onRendered(function() {
  GoogleMaps.load();
});

Template.schoolMap.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(36.1667, -86.7833),
        zoom: 12,
        streetViewControl: false
      };
    }
  }
});

Template.schoolMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {

  	// Returns bound of the map for search
		function get_bounds(){
			return {
			   sw_lat : map.getBounds().getSouthWest().lat(),
			   sw_lng : map.getBounds().getSouthWest().lng(),
			   ne_lat : map.getBounds().getNorthEast().lat(),
			   ne_lng : map.getBounds().getNorthEast().lng()
			};
		}

		// Return bounds whenever map is adjusted
		new google.maps.event.addListener( map , 'idle' , function(){
			request_listings( get_bounds() );
		});

    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});