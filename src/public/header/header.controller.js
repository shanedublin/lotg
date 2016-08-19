(function(){
	'use-strict';
	angular.module('lotg.header').controller('headerController',function(headerFactory){
		console.log('Header Controller Loaded');
		var vm = this;
		vm.hate = 'Much Hate!';
		vm.links = headerFactory.links;
		
	}).directive('lotgHeader',function(){
		return{
			templateUrl: './header/header.html',
			controller: 'headerController as head'
		};
	}).factory('headerFactory',function(){
		var header = {};
		
		header.links = [];
		
		header.addLink = function(link){
			if(link === null || link === undefined){
				console.log('Null Link Provided');
				return;
			}
			if(link.url === null  || link.url === undefined){
				console.log('No URL Provided');
				return;
			}
			if(link.name === null || link.name === undefined){
				console.err('No name Provided!');
				return;
			}
				
				
			header.links.push(link);
		};	
		
		return header;
	});
})();
