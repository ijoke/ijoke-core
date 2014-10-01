module.exports = function(app) {

  var joke = app.controllers.joke;

  app.post('/joke', joke.insert);
  app.get('/joke', joke.get);
  app.put('/joke', joke.put);

};

