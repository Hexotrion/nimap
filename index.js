import  Express  from "express";
import mysql from "mysql";
const app=Express();

app.listen(5001,()=>{console.log("listening")});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Idntknw$@123",
    database: "nimap"});


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });



      app.get("/create", (req, res) => {
        const name =req.query.pname;
        
//create
      var sql = "INSERT INTO product (pname) VALUES ('computer')";
    //   var values = "computer";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


app.get("/retrive", (req, res) => {
con.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


app.get("/retrive/{id}", (req, res) => {
    var id=req.query.id;
con.query("SELECT * FROM product WHERE id = '1'", function (err, result) {
    if (err) throw err;
    console.log(result);
});
});


app.get("/retrive/{id}", (req, res) => {
    var id=req.query.id;
var sql = "DELETE FROM product WHERE id =?";
con.query(sql,id, function (err, result) {
  if (err) throw err;
  console.log("Number of records deleted: " + result.affectedRows);
});






