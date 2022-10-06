// Require modules
const express = require('express');
const morgan = require('morgan')
const pokemon = require("./models/pokemon")

// Create the Express app
const app = express();
const PORT = 3000

// Mount middleware (app.use)
app.use(morgan('dev')) // Always in install!
app.use(express.urlencoded({extended:false})) // for privacy settings 

// Configure the app (app.set)
app.set('view engine', 'jsx'); // enables react
app.engine('jsx', require('express-react-views').createEngine());  // enables react


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.get('/pokemon', function(req, res) {
  	res.render("Index", {pokemon});
});

app.get('/pokemon/:id', function (req, res){
	const { id } = req.params 
	res.render("Show", {pokemon:pokemon[id]})
	
})

// Tell the app to listen on port 3000
app.listen(PORT, function() {
 console.log(`Listening on port ${PORT}`);
});