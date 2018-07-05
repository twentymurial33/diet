var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var PORT=process.env.PORT||3000;
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// app.use(morgan("dev"));

//Database setup:
// var moongoose=require("moongose");
// moongoose.connect('mongodb://yourDatabaseURL');
//Handle the connection request
// var db=moongose.connection;
// db.on("error");

//routes for API
	
 //test route to make sure everything is working (accessed at GET http://localhost:3000/api)
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '.', 'index.html'));
		
		// res.json({ message: 'hooray! welcome to our api!' });	
	});
	


//start the server
app.listen(PORT);
console.log('Magic happens on port ');


