(function(){
	'use-strict';
	
	
	angular.module('lotg.login').controller('loginController',function($http,configService){
		//console.log('main Controller loaded');
		var vm = this;
		
		vm.login = function(creds){
			$http.post(configService.nodeAddress + '/login', creds).then(function(value) {
				console.log('Logged in');
				console.log(value.data);
			});
		};
		
		
		vm.logout  = function(creds){
			$http.post(configService.nodeAddress + '/login', creds).then(function(value) {
				
			});
		};
		
		
	});
})();
