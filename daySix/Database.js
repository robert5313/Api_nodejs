//code to create a database

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    con.query("Create database newdatabase", function(err, result) {
        if (err) throw err;
        console.log("Database created");
    })
})