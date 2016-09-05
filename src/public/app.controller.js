(function(){
	'use-strict';
	
	
	angular.module('lotg').controller('mainController',function(listService,loginService){
		//console.log('main Controller loaded');
		
		var vm = this;
		
		vm.ls = listService;
		
		vm.loginService = loginService;
		
		
	});
})();
