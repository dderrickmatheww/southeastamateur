var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "oudkbrbyyj2ju89y",
    // Your password
    password: "f3bscxv2hxm0cbjy",
    database: "tya93pwjife9yk0r"
});
//Make connection
connection.connect(function (err) {
    if (err) throw err;
});
// Export connection for ORM to use
module.exports = connection;