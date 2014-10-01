module.exports = function(app) {

  var Joke = app.models.joke;

  var JokeController = {
    insert : function(req, res) {
	res.status(201);
        res.send('OPAAA'); 
    },
    get : function(req, res) {
	res.status(200);
        res.send('OPAAA');  
    },
    put : function(req, res){
	res.status(200);
        res.send('OPAAA');  
    }
  }
  return JokeController;



};

