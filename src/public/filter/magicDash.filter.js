(function(){
	'use-strict';
	
	
	angular.module('lotg').filter('magicDashFilter',function(){
		//console.log('Config Service');
		
		return function(input,option){
			//console.log(input);
			if(input === null || input === undefined){
				//console.log(option);
				if(option !== null  && option !== undefined){
					return option;
				}
				return '-';
			}
			
			return input;
			
		};
		
		
	});
})();
