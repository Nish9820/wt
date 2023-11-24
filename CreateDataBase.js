var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Conected!");
  con.query("CREATE DATABASE Student", function (err, result) {
    if (err) throw err;
    console.log("Database created successfully!");
  });
});
