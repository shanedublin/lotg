var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/kyle/config.js');
var seqJoins = require('./orm/seq.joins.js');

//var userTest = require('./test/user.test.js');
//var sessionTest = require('./test/session.test.js');

//console.log('*****************Node Enviroment*****************');
//console.log(process.env.NODE_ENV);
//console.log('*************************************************');

var allowCrossDomain = function(req,res,next){
	//console.log('cors');
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token');

    next();
	
};

app.use(allowCrossDomain);
app.use(bodyParser.json());


var Hero = require('./Hero');
var Forum = require('./Forum');
var Login = require('./user/user.controller');
var Authorization = require('./authorization/Authorization');

seqJoins.init();

app.use('/',Authorization.verify);

app.use('/forum',Forum);
app.use('/hero',Hero);
app.use('/account',Login);


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



