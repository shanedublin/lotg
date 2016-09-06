(function(){
	'use-strict';
	
	
	angular.module('lotg.login').controller('loginController',function($http,configService,$location,loginService){
		//console.log('main Controller loaded');
		var vm = this;
		
		vm.loginForm = true;
		vm.uniqueName = false;
		vm.uniqueEmail = false;
		
		vm.checkName = function(creds){
			$http.post(configService.nodeAddress + '/account/username',creds).then(function(value) {
				//console.log(value);
				//console.log(value.data);
				vm.uniqueName = value.data;
			});
		};

		
		vm.checkEmail = function(creds){
			$http.post(configService.nodeAddress + '/account/email',creds).then(function(value) {
				//console.log(value);
				//console.log(value.data);
				vm.uniqueEmail = value.data;
			});
		};

		
		vm.createAccount = function(creds,form,stayLoggedIn){
			console.log(creds);
			 
			if(form.$invalid){
				return;			
			}
			
			$http.post(configService.nodeAddress + '/account/create', creds).then(function(value) {
				console.log('Create Account');
				console.log(value.data);
				$location.path('#/home');
				loginService.saveToken(value.data,stayLoggedIn);
			});
		};
		
		
		vm.checkPassword = function(creds){
			
			//console.log(creds);
			if(creds === null || creds === undefined)
				return false;
			
			if(creds.password === null || creds.password === undefined)
				return false;
			
			if(creds.password.length < 8)
				return false;
			
			return true;
			
		};
		
		vm.checkConfirmPassword = function(creds){
			
			//console.log(creds);
			if(creds === null || creds === undefined)
				return false;
			
			if(creds.password === null || creds.password === undefined)
				return false;
			
			if(creds.confirmPassword === null || creds.confirmPassword === undefined)
				return false;
			
			if(creds.confirmPassword !== creds.password)
				return false;
			
			
			return true;
			
		};
		
		
		vm.login = function(creds,form,stayLoggedIn){
			console.log(creds);
			if(form.$invalid){
				return;			
			}
			
			$http.post(configService.nodeAddress + '/account/login', creds).then(function(value) {
				console.log('Logged in');
				console.log(value.data);
				$location.path('#/home');
				loginService.saveToken(value.data,stayLoggedIn);
			});
		};
		
		vm.formValid = function(creds,form){
			if(form.$valid === false)
				return false;
			
			if(vm.uniqueName === false)
				return false;
			
			if(vm.uniqueEmail === false)
				return false;
			
			if(vm.checkConfirmPassword(creds) === false)
				return false;
			
			if(vm.checkPassword(creds) === false)
				return false;
			
			return true;
			
		};
	
		
		
	});
})();
