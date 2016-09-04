(function(){
	'use-strict';
	
	
	angular.module('lotg.login').controller('loginController',function($http,configService){
		//console.log('main Controller loaded');
		var vm = this;
		
		vm.loginForm = true;
		
		vm.createAccount = function(creds){
			console.log(creds);
			$http.post(configService.nodeAddress + '/account/create', creds).then(function(value) {
				console.log('Create Account');
				console.log(value.data);
			});
		};
		
		
		vm.login = function(creds){
			$http.post(configService.nodeAddress + '/account/login', creds).then(function(value) {
				console.log('Logged in');
				console.log(value.data);
			});
		};
		
		
		
		vm.logout  = function(creds){
			$http.post(configService.nodeAddress + '/account/logout', creds).then(function(value) {
				
			});
		};
		
		
	});
})();
