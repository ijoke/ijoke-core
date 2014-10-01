module.exports = function(app) {

  var db = require('../middleware/db_connect')();
  var Schema = require('mongoose').Schema;

  var joke =  Schema({
    user_joke: { type: String},
    description: {type: String}
  });


  return db.model('joke', joke);
};


