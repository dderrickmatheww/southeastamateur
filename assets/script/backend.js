var mysql = require("mysql");
var path = require("path");
var app = express();

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "greatBay_DB"
  });