var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var PORT=process.env.PORT||3000;

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
var router=express.Router();
router.use(function(req, res, next) {
		console.log('Something is happening.');
		next();
	});
	
 //test route to make sure everything is working (accessed at GET http://localhost:3000/api)
	router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});
	


//start the server
app.listen(PORT);
console.log('Magic happens on port ');


