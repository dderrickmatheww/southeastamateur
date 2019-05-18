var orm = require("../config/orm");

var players = {
  all: function(table, cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, objColVals, condition, cb){
    orm.delete(table, objColVals, condition, function(res){
    cb(res);  
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = players;
