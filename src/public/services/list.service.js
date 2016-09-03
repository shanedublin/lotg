(function(){
	'use-strict';
	
	
	angular.module('lotg').service('listService',function(){
		//console.log('Config Service');
		var list = {};
		
		
		
		list.gods = [];		
		list.species = [];
		list.personality = [];
		list.size = [];
		
		list.gods.push({id:0,name:'Crander'});
		list.gods.push({id:1,name:'Garthon'});
		list.gods.push({id:2,name:'Loxum'});
		list.gods.push({id:3,name:'Diatreas'});
		list.gods.push({id:4,name:'Glandor'});
		list.gods.push({id:5,name:'Wizer'});
		
		list.species.push({id:0,name:'Human'});
		list.species.push({id:1,name:'Elf'});
		list.species.push({id:2,name:'Lizard'});
		list.species.push({id:3,name:'Robot'});
		
		list.size.push({id:0,name:'Tiny'});
		list.size.push({id:1,name:'Small'});
		list.size.push({id:2,name:'Medium'});
		list.size.push({id:3,name:'Large'});
		list.size.push({id:4,name:'Huge'});
		list.size.push({id:5,name:'Colossal'});
		
		list.personality.push({id:0,name:'Wary'});
		list.personality.push({id:1,name:'Loyal'});
		list.personality.push({id:2,name:'Tricky'});
		list.personality.push({id:3,name:'Evil'});
		list.personality.push({id:4,name:'Brave'});
		list.personality.push({id:5,name:'Hungry'});
		
		
		
		
		return list;
		
		
	});
})();
