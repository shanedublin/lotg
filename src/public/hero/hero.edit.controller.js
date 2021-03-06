(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroEditController',function($http,configService,$state,loginService,$location){
		//console.log('hero Edit Controller loaded');
		var vm = this;
		
		vm.h = {};		
		
		if(! loginService.isLoggedIn()){
			$location.path('#/home');
		}
		
		
		//console.log($state.params.hero);
		// if the hero is given set it to the object
		if($state.params.hero !== null){
			angular.copy($state.params.hero,vm.h);			
		}
			
		
		vm.saveHero = function(){
			console.log(vm.h);
			$http.post(configService.nodeAddress+'/hero',vm.h)
			.then(function(value){
				angular.copy(value.data,vm.h);
				console.log(value.data);
			});
		};
		
		vm.deleteHero = function(){
			$http.post(configService.nodeAddress + '/hero/delete',vm.h).then(function(value){
				if(value.data){
					angular.copy({},vm.h);
				}
			});
		};
		
		
		/**
		 * adds a power to the hero, 
		 * if the hero already has an id 
		 * send a message to the back to add
		 * new power
		 */ 
		vm.addPower = function(power){
			
			if(vm.h.powers === undefined){
				vm.h.powers = [];
			}
			if(vm.h.id === null || vm.h.id === undefined){
				vm.h.powers.push(power);
			}else{
				
			power.hero_id = parseInt(vm.h.id);
			
				$http.post(configService.nodeAddress+'/hero/power',power).then(function(value){
					vm.h.powers.push(value.data);							
				});			
			}
				
		};
		
		vm.removePower =function(power){
			if(vm.h.powers === undefined){
				return;
			}
			
			if(typeof power === 'object'){
				let i = vm.h.powers.indexOf(power);
				$http.post(configService.nodeAddress + '/hero/power/delete',power).then(function(value){
					if(value){
						if(i >= 0){
							vm.h.powers.splice(i,1);
						}
					}else{
						console.log('Error');
					}
				});
				
			}
			
		};
		
		
		
	});
})();
