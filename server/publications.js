Meteor.publish('schools', function() {
  return Schools.find();
});