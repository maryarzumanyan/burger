var orm = require("../config/orm.js");

/*
var data = orm.selectWhere("parties", "party_type", "grown-up", function (data){
    console.log("data from callback: ", data);
});

console.log("The data is " + data); // Data is undefined. Why?







module.exports = ?????;

 */

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, devoured, cb) {
    orm.insertOne("burgers", "burger_name", "devoured", burger_name, devoured, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, condition, cb) {
    orm.updateOne("burgers", "devoured", devoured, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
