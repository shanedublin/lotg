var Sequelize = require('sequelize');
var config = require('./config/kyle/config.js');
var seq = new Sequelize(...config.databaseConnection);


var orm = {};

 orm.Hero = seq.define('hero',{	
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

orm.Power = seq.define('hero_power',{
	id:{
		type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,field: 'id'
	},
	name:{
		type: Sequelize.STRING
	},
	description:{
		type: Sequelize.STRING
	}
},config.defaultSequelizeSettings);

orm.Power.belongsTo(orm.Hero, {foreignKey:'hero_id'});
orm.Hero.hasMany(orm.Power, {as: 'powers',foreignKey:'hero_id',onDelete: 'cascade',hooks:true });

var hate = {
		 id:25,
		  name: "Upsert",
		  description: "Description not set",
		  health: null,
		  attack: 132,
		  range: 2,
		  points: 5,
		  defense: 7,
		  move: 2123,
		  powers: [
		    {		      
		      name: "Another Power",
		      description: "Description not set",
		      hero_id: 17
		    }
		  ]
		};

//(function(){
//	
////	orm.Hero.upsert(hate,{where: {id:hate.id}, include:[{model: orm.Power, as: 'powers'}]}).then(function(data){
////		console.log(data);
////	});
//	orm.Hero.findById(26, {include:[{model: orm.Power, as: 'powers'}]}).then(function(hero){
//		console.log(JSON.stringify(hero,null,'\t'));
//		for(let i = 0;i < hero.powers.length; i ++){
//			let p = hero.powers[i];
//			p.description = 'Well Well Well' + i;
//			//p.save();
//		};
//		hero.save().then(function(data){
//			console.log(JSON.stringify(data,null,'\t'));
//		});
//		//hero.destroy();
//	});
//})();

//(function(){
//	seq.sync().then(function(){
//		
//		orm.Hero.findById(20, {include:[{model: orm.Power, as: 'powers'}]}).then(function(hero){
//			//console.log(JSON.stringify(hero,null,'\t'));
//			//console.log(data.powers);
//			
//			if(hero !== null){
//				hero.update(hate).then(function(upHero){
//			 		console.log("Hero Updated");
//			 		
//			 		let power = hate.powers[0];
//			 		
//			 			updatePower(power);
////			 		orm.Power.findById(power.id).then(function(power){			 			
////			 			console.log(JSON.stringify(power,null,'\t'));
////			 			power.update(power).then(function(data){
////			 				console.log('Power Updated!');
////			 			});
////			 		});
//			 		
//				});
//			}
//
//
//		});
//
//	});
//})();


//function savePowers(hero, powers){
//	var promises = [];
//	for(let i = 0; i < powers.length; i++){
//		let p = powers[i];
//	 let promise =	orm.Power.findById(p.id).then(function(power){
//			if(power === null){
//			  	return createPower(p);
//			}else{
//				return savePower(p);
//			}
//		});
//		promises.push(promise);
//	}
//	
//	
//	return Promise.all(promises);
//}
//
//function updatePower(powerPojo){
//	orm.Power.findById(powerPojo.id).then(function(power){			 			
//		console.log(JSON.stringify(power,null,'\t'));
//		power.update(powerPojo).then(function(data){
//			console.log('Power Updated!');
//		});
//	});
//}
//
//function createPower(power){
//	power
//}

module.exports = orm;