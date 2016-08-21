(function(){
	'use-strict';
	angular.module('lotg.hero').controller('heroEditController',function($http,configService){
		console.log('hero Edit Controller loaded');
		var vm = this;
		
		vm.h = {};		
		
		vm.saveHero = function(){
			console.log(vm.h);
			$http.post(configService.nodeAddress+'/hero',vm.h)
			.then(function(value){
				angular.copy(value.data,vm.h);
				console.log(value.data);
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
