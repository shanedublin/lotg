(function(){
	'use-strict';
	
	
	angular.module('lotg.profile').controller('profileController',function($http,configService,loginService,$location){
		console.log('profile Controller loaded');
		
		
		
		
		
		var vm = this;
		
		if(loginService.isLoggedIn() === false){
			$location.path('/home');
		}
		
		
		vm.changePassword = false;
		
		vm.profile = {};
		vm.loadProfile = function(){
			//console.log('Loading profile');
			vm.changePassword = false;
			$http.get(configService.nodeAddress + '/account/profile').then(function(value) {
				console.log(value.data);
				angular.copy(value.data, vm.profile);
			});
		};
		
		vm.loadProfile();
		
	});
})();
