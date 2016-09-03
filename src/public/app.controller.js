(function(){
	'use-strict';
	
	
	angular.module('lotg').controller('mainController',function(listService){
		//console.log('main Controller loaded');
		
		var vm = this;
		
		vm.ls = listService;
		
		
	});
})();
