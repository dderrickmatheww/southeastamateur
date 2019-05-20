var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "kuw37aq6i37nf3bl",
    // Your password
    password: "idxsrrwu50l8ws61",
    database: "kvebdvy2kqiobjdc"
});
//Make connection
connection.connect(function (err) {
    if (err) throw err;
});
// Export connection for ORM to use
module.exports = connection;