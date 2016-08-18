'use-strict';
var express = require('express');
var Hero = express.Router();

Hero.get('/',function(req,res){
	
	var hero = {
			name: "nasus",
			health : 1
	};
	res.send(hero);
})



module.exports = Hero;