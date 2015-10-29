var geo = new GeoCoder();
var schools = Schools.find({latlng:null});
var i = 0;
schools.forEach(function (school) {
	//only allows ten at a time to prevent hitting rate limit
	if (i<10) {
		//send geocode query
		var result = geo.geocode(school.address + ', ' + school.city);
		//make sure results are defined
		if (result[0] != undefined) {
			var coordinates = result[0].latitude + ',' + result[0].longitude;
			Schools.update(school,{$set:{latlng: coordinates}});
			console.log(result[0].formattedAddress);
		} else {
		//log undefined results
			console.log('UNDEFINED:' + school.name + ', ' + school.address + ', ' + school.city);
		}
		i++;
	} else {
		//log schools over first ten
		console.log('SKIPPED:' + school.name);
	};
});