(function(){
	'use-strict';
	
	
	angular.module('lotg.store').controller('storeController',function($http,configService,loginService,$location){
		console.log('Store Controller loaded');
		
		var vm = this;
		
		vm.heroes = [];
		vm.points = 0;
		vm.loadHeroes = function(){
			$http.get(configService.nodeAddress +'/store/heroes').then(function(value) {
				vm.heroes = value.data;
			}, function(reason) {
				
			}, function(value) {
				
			});
		};
		
		
		vm.buyHero = function(hero){
			$http.post(configService.nodeAddress + '/store/heroes/buy',hero).then(function(value){
				console.log(value.data);
				vm.loadHeroes();
				vm.loadPoints();
				//did this  
			});
		};
		
		vm.loadPoints = function(){
			
			if(loginService.isLoggedIn()){
				$http.get(configService.nodeAddress +'/account/sp').then(function(value) {
					//console.log('points');
					//console.log(value);
					vm.points = value.data;
				});				
			}else{
				vm.points = 0;
			}	
		};
		
		
		vm.loadPoints();
		vm.loadHeroes();
	
	});
})();
