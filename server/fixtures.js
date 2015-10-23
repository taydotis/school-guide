if (Schools.find().count() === 0) {
  Schools.insert({
    name: 'Hume-Fogg High School',
    type: 'Magnet'
  });

  Schools.insert({
    name: 'University School of Nashville',
    type: 'Non-secular Private'
  });

  Schools.insert({
    name: 'Nashville Big Picture High School',
    type: 'Public Neighborhood'
  });
}