(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroEditController',function(){
		console.log('hero Edit Controller loaded');
		var vm = this;
		
		vm.list = [];
		
		vm.createNewHero = function(hero){
			vm.list.push(hero);
		};
		
		vm.createNewHero({name: 'Lidar The Keen', attack: 6, defense: 5, life: 4,
			powers: [{name: 'Aware', description:'Lidar adds plus 1 to his defense when receiving damage from a non adjacent unit'}],
			description: 'Lidar is an ultra awareing being. He seems to alway know stuff.'
		});
		
		vm.createNewHero({name: 'N-Droid 45', attack: 6, defense: 8, life: 3});
		vm.createNewHero({name: 'Keplar The stealth Elf', attack: 6, defense: 1, life: 1});
		vm.createNewHero({name: 'Logan The Salty', attack: 9, defense: 0, life: 5});
		
		
		
	});
})();
