module.exports = function(app) {

  var Joke = app.models.joke;

  app.param('id', function(req, res, next, id) {
    console.log('id req middel', id);
      Joke.findById(id, function(err, joke) {
        if (err) console.log("Erro ao buscar joke", err);
        req.joke = joke;
        next();
      });
  });


  var JokeController = {
    insert : function(req, res) {
	console.log(req.body);
	var newJoke = new Joke(req.body);
        newJoke.save(function(err, jokeSaved){
		if(err){
			console.log("Error saving joke - " + err);
			res.status(500);
		}
		console.log('post joke', jokeSaved);
		res.status(201);
		res.location('/joke/' + jokeSaved._id);
		res.send(jokeSaved);	
	});
    },
    get : function(req, res) {
	Joke.findOne(function(err, jokeFind){
		res.status(200);
		res.send(jokeFind);
	});	
    },
    getById : function(req, res){
    	res.status(200);
	res.send(req.joke);
    },
    put : function(req, res){
	console.log(req.body);
	var joke = req.joke;
	joke.likes = joke.likes + 1;
	joke.update(function(err, updated){			
		res.status(200);
        	res.send(updated);  
	});
    }
  }
  return JokeController;



};

