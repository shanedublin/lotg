
'use-strict';
var express = require('express');
var Login = express.Router();
var config = require('./config/kyle/config.js');

Login.post('/',function(req,res){
	res.send('lol not set up');

});



console.log('Server Login Init');



module.exports = Login;