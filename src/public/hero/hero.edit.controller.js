(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroEditController',function($http,configService,$state){
		console.log('hero Edit Controller loaded');
		var vm = this;
		
		vm.h = {};		
		
		console.log($state.params.hero);
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
		
		
		vm.addPower = function(power){
			if(vm.h.powers === undefined){
				vm.h.powers = [];
			}
			if( typeof power === 'object'){
				vm.h.powers.push(power);				
			}
				
		};
		
		vm.removePower =function(power){
			if(vm.h.powers === undefined){
				return;
			}
			
			if(typeof power === 'object'){
				let i = vm.h.powers.indexOf(power);
				if(i >= 0){
					vm.h.powers.splice(i,1);
				}
				
			}
			
		};
		
		
		
	});
})();
