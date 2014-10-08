module.exports = function(app) {

  var Joke = app.models.joke;

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
		//res.setHeader('Location', '/joke/' + jokeSaved._id);
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
    put : function(req, res){
	console.log(req.body);
	//Joke.insert(req.body);
	res.status(200);
        res.send('OPAAA');  
    }
  }
  return JokeController;



};

