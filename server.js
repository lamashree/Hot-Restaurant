var express = require("express");
var mysql = require("mysql");
var path = require("path");

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "aa",
        phone: "123456789",
        email: "aaa@bbb.com",
        uniqueId: 1
    },
    {
        name: "bb",
        phone: "123456788",
        email: "cc@bbb.com",
        uniqueId: 2
    }
];

//main page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/view", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reservation", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserv.html"));
  });
// app.get("/reserve", function(req, res){
//     res.send("Welcome to the reserve page");
// });


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
app.get("/Api/view/:table", function(req, res){
  var chosen = req.params.table;
  console.log(req);
  for (var i = 0; i < tables.length; i++){
      if (chosen === table[i]. routeName){
          return res.json(table[i])
      }
  }
  return res.json(false);
})



