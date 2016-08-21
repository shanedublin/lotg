(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroController',function(configService,$http){
		console.log('hero Controller loaded');
		var vm = this;
		
		vm.list = [];
		
		vm.createNewHero = function(hero){
			vm.list.push(hero);
		};
		
		vm.createNewHero({name: 'Lidar The Keen', attack: 6, defense: 5, life: 4,range:2,
			powers: [{name: 'Aware', description:'Lidar adds plus 1 to his defense when receiving damage from a non adjacent unit'}],
			description: 'Lidar is an ultra awareing being. He seems to alway know stuff.'
		});
		
		vm.createNewHero({name: 'N-Droid 45', attack: 6, defense: 8, life: 3, range:2});
		vm.createNewHero({name: 'Keplar The stealth Elf', attack: 6, defense: 1, life: 1,range:2});
		vm.createNewHero({name: 'Logan The Salty', attack: 9, defense: 0, life: 5,range:2});
		
		vm.loadHeros = function(){
			//console.log(configService.nodeAddress);
			$http.get(configService.nodeAddress + '/hero').then(function(value){
				//console.log(value.data);
				vm.list = value.data;
				
			});
		};
		vm.loadHeros();
		
	});
})();
