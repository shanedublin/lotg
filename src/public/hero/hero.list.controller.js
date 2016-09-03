(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroListController',function(configService,$http,$state){
		//console.log('hero Controller loaded');
		var vm = this;
		
		vm.list = [];
		
		vm.loadHeros = function(){
			//console.log(configService.nodeAddress);
			$http.get(configService.nodeAddress + '/hero').then(function(value){
				console.log(value.data);
				vm.list = value.data;
				
			});
		};
		vm.loadHeros();
		
		vm.selectedHero = null;
		
		vm.editHero = function(hero){
			//console.log(hero);
			$state.go('heroEdit',{hero: hero});
		};
		
		
		vm.selectHero = function(hero){
			//console.log(hero);
			if(vm.selectedHero === hero){
				vm.selectedHero = null;
			}else{
				vm.selectedHero = hero;			
			}
		};
		
		
	});
})();
