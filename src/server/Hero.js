
'use-strict';
var express = require('express');
var Hero = express.Router();
var config = require('./config/kyle/config.js');
var orm = require('./orm.js');
var ormHero = orm.Hero;

Hero.get('/',function(req,res){
	
	ormHero.findAll({
		include:[{model: orm.Power, as: 'powers'}]
	}).then(function(data){
		res.send(data);
	}).catch(function(err){
		console.log(err);
	});
	
});

/**
 * Updates the Hero. 
 * This is really a hack on cascade saving. 
 * It updates if it can find A match on the Hero power...
 * There has got to be a better way to do this but i can't find it. * 
 */
Hero.post('/',function(req,res){
	
	var h = req.body;
		
	ormHero.findOne({where:{id: h.id}, include:[{model: orm.Power, as: 'powers'}]}).then(function(hero){
		if(hero === null){
			ormHero.create(h,{
				include:[{model: orm.Power, as: 'powers'}]
			}).then(function(hero){
				res.send(hero);
			});
		}else{
			for(let i = 0; i < hero.powers.length; i ++){
				let oldPower = hero.powers[i];
				
				for(let j = 0; j < h.powers.length; j ++){
					let newPower = h.powers[j];
					if(newPower.id === oldPower.id && newPower.hero_id === parseInt(hero.id)){
						oldPower.update(newPower);
						break;
					}
				}
				
			}
			
			hero.update(h).then(function(updatedHero){
				res.send(updatedHero);			
				
			});
		}
	});
	

});

Hero.post('/power/delete',function(req,res){
	var p = req.body;
	
	if(isNaN(parseInt(p.id))){
		res.status(400).send('Can\'t deleted Null!');
		return;
	}
	
	orm.Power.findById(parseInt(p.id)).then(function(power){
		if(power === null){
			res.send(false);
		}else{
			power.destroy().then(function(){
				res.send(true);
			});
		}
	});
	
	
});

Hero.post('/power',function(req,res){
	var p = req.body;
	if(p === null){
		res.status(400).send('Can\'t save Null!');
		return;
	}
	
	orm.Power.findById(p.id).then(function(power){
		if(power === null){			
			orm.Power.create(p).then(function(newPower){
				res.send(newPower);
			});
		}else{
			power.update(p).then(function(updatedPower){
				res.send(updatedPower);
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
	
	ormHero.findById(parseInt(h.id)).then(function(hero){
		if(hero === null){			
			res.send(false);
		}else{			
			hero.destroy().then(function(hero){
				res.send(true);
			});
		}
	});
	
});

console.log('Server Hero Init');



module.exports = Hero;