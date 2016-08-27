(function(){
	'use-strict';
	angular.module('lotg.forum').controller('forumController',function($location){
		//console.log('Forum Controller loaded');
		var vm = this;
		
		vm.lotg = [];
		vm.other = [];
		
		vm.lotg.push({title: 'News', description: 'All site news and new game news will be posted here',clazz:'bg-danger'});
		vm.lotg.push({title: 'Heroes', description: 'Hero Discussion. Who is the best Hero? Who needs a nerf?',clazz:'bg-info'});
		vm.lotg.push({title: 'Strategy', description: 'Talk Strategy Here. Why is your team the best?' ,clazz:'bg-warning'});
		vm.lotg.push({title: 'Fan Art', description: 'Show off your fan art. Make the world know your name' ,clazz:'bg-success'});
		
		vm.other.push({title: 'Technology', description: 'Talk about technology here' ,clazz:'bg-success'});
		vm.other.push({title: 'General', description: 'Talk about what ever you want here' ,clazz:'bg-warning'});
		vm.other.push({title: 'Other Games', description: 'What other Games do you like' ,clazz:'bg-info'});
		
		vm.loadSubject = function(forum){
			console.log($location);
			$location.path($location.$$path+'/'+forum.title);
			
		};
		
	});
})();
