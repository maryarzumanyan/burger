//Import (require) 
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
  
      connection.query(
        queryString,
        [tableInput],
        function (err, result) {
          if (err) throw err;
          cb(result);
        });
    },

    insertOne: function(tableInput, colName1, colName2, val1, val2, cb){
        var queryString = "INSERT INTO " + tableInput + " (" + colName1 + ", " + colName2 + ") VALUES ( '" + val1 + "', " + val2 + ");";
        connection.query(
            queryString,
            [tableInput, colName1, colName2, val1, val2],
            function(err, result){
                if(err) throw err;
                cb(result);
            });
    },
    
    updateOne: function(tableInput, colName, value, condition, cb){
        var queryString = "UPDATE " + tableInput + " SET " + colName + " = " + value + " WHERE " + condition + ";";
        connection.query(
            queryString,
            [],
            function(err, result){
                if(err) throw err;
                cb(result);
            });
    }
  };
  
  module.exports = orm;

/*
var orm = {
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      function (err, result) {
        if (err) throw err;
        cb(result)
      });
  }
};

module.exports = orm;
 */