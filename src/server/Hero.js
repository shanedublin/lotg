
'use-strict';
var express = require('express');
var Hero = express.Router();
var config = require('../../config.js');
var Sequelize = require('sequelize');
var seq = new Sequelize(...config.databaseConnection);

var seqHero = seq.define('hero',{	
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	name:{
		type: Sequelize.STRING
	},
	description:{
		type: Sequelize.STRING
	},
	health:{
		type: Sequelize.INTEGER
	},
	attack:{
		type: Sequelize.INTEGER
	},
	range:{
		type: Sequelize.INTEGER
	},
	points:{
		type: Sequelize.INTEGER
	},
	defense:{
		type: Sequelize.INTEGER
	},
	move:{
		type: Sequelize.INTEGER
	}
},config.defaultSequelizeSettings);

//seqHero.sync().then(function(data){
//	//console.log(data);
//	return seqHero.create({
//		name: 'hate3',
//		description: 'Best ever'
//	}) ;
//});

Hero.get('/',function(req,res){
	
	seqHero.findAll({raw:true}).then(function(data){
		res.send(data);
	}).catch(function(err){
		console.log(err);
	});
	
});

Hero.post('/',function(req,res){
	
	///console.log(JSON.parse(req.body));
	//console.log(req.body);
	var h = req.body;
	//console.log(h);
	
	
	seqHero.findOne({where:{id: h.id}}).then(function(hero){
		if(hero === null){
			seqHero.create(h).then(function(hero){
				res.send(hero.dataValues);
			});
		}else{
			hero.update(h).then(function(hero){
				res.send(hero.dataValues);
			});
		}
	});
	

});

Hero.post('/delete',function(req,res){
	var h = req.body;
	console.log(h);
	if(isNaN(parseInt(h.id))){
		res.status(400).send("Can't send null!");
		return;
	}
	
	seqHero.findById(parseInt(h.id)).then(function(hero){
		if(hero === null){
			seqHero.create(h).then(function(hero){
			});
			res.send(false);
		}else{
			
			hero.destroy().then(function(hero){
				res.send(true);
			});
		}
	});
	
});


function test(){
//	seqHero.findAll({raw:true}).then(function(value) {
//		console.log(value);
//	});
	seqHero.findOne({where:{id:7}}).then(function(res){
		console.log(res);
		if(res === null){
			seqHero.create({name:'Omega Turd', description: 'You\'ll need to flush twice'}).then(function(data){
				//console.log(data);
			});
		}else{
			res.name= "WOWOW 123";
			res.save();
			
		}
	});
//	seqHero.create({	
//		id: 6,
//		name: 'hate3',
//		description: 'Best ever'
//	}) ;
	
}

//test();
console.log('Server Hero Init');




module.exports = Hero;