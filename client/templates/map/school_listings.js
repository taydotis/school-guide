var schoolsData = [
	{
		name: 'Hume-Fogg High School',
		type: 'Magnet'
	},
	{
		name: 'University School of Nashville',
		type: 'Non-secular Private'
	},
	{
		name: 'Nashville Big Picture High School',
		type: 'Public Neighborhood'
	}
];
Template.schoolListings.helpers({
	schools: schoolsData
});