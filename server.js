var express = require("express");
var mysql = require("mysql");
var path = require("path");

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitlist = [];

//main page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/view", function(req, res){
    res.json(tables);
});

app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.post("/reserve", function(req, res){
    var newTable = req.body;

    console.log(newTable);
  
    if (tables.length < 5){
        tables.push(newTable);
    } else {
        waitlist.push(newTable);
    }
  
    res.json(newTable);
});



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



