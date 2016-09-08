(function(){
	'use-strict';
	
	
	angular.module('lotg.store').controller('storeController',function($http,configService,loginService,$location){
		console.log('Store Controller loaded');
		
		var vm = this;
		
		vm.heroes = [];
		vm.loadHeroes = function(){
			$http.get(configService.nodeAddress +'/store/heroes').then(function(value) {
				vm.heroes = value.data;
			}, function(reason) {
				
			}, function(value) {
				
			});
		};
		
		vm.loadHeroes();
	
	});
})();
