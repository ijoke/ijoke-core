
/**
 * Module dependencies.
 */

var express = require('express')
   , load = require('express-load')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
load('models')
.then('controllers')
.then('routes')
.into(app);


//app.get('/', routes.index);

//app.listen(3000, function(){
  //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
//});

app.listen(process.env.PORT || 5600, function(){
  console.log("Rodando ijoke.");
});
console.log("Express server listening on port %d in %s mode", app, app.settings.env);

