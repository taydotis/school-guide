Router.route('/api', function(){
	var req = this.request;
	var res = this.response;

	var schools = Schools.find().fetch();

	var queryParameters = this.params.query;

	var neLAT = queryParameters['ne_lat'];
	var swLAT = queryParameters['sw_lat'];
	var neLNG = queryParameters['ne_lng'];
	var swLNG = queryParameters['sw_lng'];

	var filteredSchools = [];

	schools.forEach( function(school){
		if (school.latlng[0] < neLAT && school.latlng[0] > swLAT && school.latlng[1] < neLNG && school.latlng[1] > swLNG) {
			filteredSchools.push(school);
		}
	});

	var results = {'results':filteredSchools};
	
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://tay.is');
	res.end(JSON.stringify(results, null, 2));
}, {where: 'server'});