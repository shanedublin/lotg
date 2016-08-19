var express = require('express');
var app = express();
var config = require('../../config.js');

var Hero = require('./Hero');

app.use('/hero',Hero);
// redirects to home page
app.get('/',function(req,res){
	res.redirect('/index.html');
});

app.get('/hate',function(req,res){
	res.send('So much Hate');
});

app.listen('3000',function(){
	console.log('Example App Listining on port 3000');
	//console.log(__dirname);
});

app.use(express.static(config.publicFolder));