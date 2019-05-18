var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "dderrickmatheww",
    // Your password
    password: "Blind5656!",
    database: "SALplayer_DB"
});
//Make connection
connection.connect(function (err) {
    if (err) throw err;
});
// Export connection for ORM to use
module.exports = connection;