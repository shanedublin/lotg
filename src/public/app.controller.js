(function(){
	'use-strict';
	
	
	angular.module('lotg').controller('mainController',function($http,$location,listService,loginService,configService){
		//console.log('main Controller loaded');
		
		var vm = this;
		
		vm.ls = listService;
		
		vm.loginService = loginService;
		
		
		
		vm.logOut  = function(){
			console.log('logging out');
			$http.get(configService.nodeAddress + '/account/logout').then(function(value) {
//				console.log(value);
				if(value.data === true){
					console.log('data' + value.data);
				}else{
					console.error('There was an error logging out!');
				}
				loginService.logOut();
				$location.path('/login');					
			},function(value){
				loginService.logOut();
				$location.path('/login');
			});
		};
		
		
	});
})();
