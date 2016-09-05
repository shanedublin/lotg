(function(){
	'use-strict';
	
	
	angular.module('lotg.login').controller('loginController',function($http,configService,$location,loginService){
		//console.log('main Controller loaded');
		var vm = this;
		
		vm.loginForm = true;
		
		vm.createAccount = function(creds,form){
			console.log(creds);
			 
			if(form.$invalid){
				return;			
			}
			
			$http.post(configService.nodeAddress + '/account/create', creds).then(function(value) {
				console.log('Create Account');
				console.log(value.data);
				$location.path('#/home');
				loginService.saveToken(value.data);
			});
		};
		
		
		vm.login = function(creds,form){
			console.log(creds);
			if(form.$invalid){
				return;			
			}
			
			$http.post(configService.nodeAddress + '/account/login', creds).then(function(value) {
				console.log('Logged in');
				console.log(value.data);
				$location.path('#/home');
				loginService.saveToken(value.data);
			});
		};
		
		
		
		vm.logout  = function(creds){
			$http.post(configService.nodeAddress + '/account/logout', creds).then(function(value) {
				
			});
		};
		
		
	});
})();
