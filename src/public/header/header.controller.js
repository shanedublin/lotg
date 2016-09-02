(function(){
	'use-strict';
	angular.module('lotg.header').controller('headerController',function(headerFactory){
		//console.log('Header Controller Loaded');
		var vm = this;
		vm.hate = 'Much Hate!';
		vm.links = headerFactory.links;
		vm.rightLinks = headerFactory.rightLinks;
		
	}).directive('lotgHeader',function(){
		return{
			templateUrl: './header/header.html',
			controller: 'headerController as head'
		};
	}).factory('headerFactory',function(){
		var header = {};
		
		header.links = [];
		header.rightLinks = [];
		
		header.addLink = function(link){
			
			if(header.validateLink(link)){
				header.links.push(link);			
			}
				
		};
		
		header.addRightLink = function(link){
			if(header.validateLink(link)){
				header.rightLinks.push(link);			
			}
		};
		
		header.validateLink = function(link){
			if(link === null || link === undefined){
				console.log('Null Link Provided');
				return false;
			}
			if(link.url === null  || link.url === undefined){
				console.log('No URL Provided');
				return false;
			}
			if(link.name === null || link.name === undefined){
				console.err('No name Provided!');
				return false;
			}
			return true;
		};
		
		
		
		
		return header;
	});
})();
