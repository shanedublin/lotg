var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('../../config.js');


var allowCrossDomain = function(req,res,next){
	//console.log('cors');
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
	
};

app.use(allowCrossDomain);
app.use(bodyParser.json());


var Hero = require('./Hero');
var Forum = require('./Forum');

app.use('/forum',Forum);

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



