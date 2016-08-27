(function(){
	'use-strict';
	angular.module('lotg.forum').controller('forumSubjectController',function($state,$location,$http,configService){
	//	console.log('Forum Subject Controller loaded');
		var vm = this;
		vm.name = $state.params.subject;
		console.log($state.params);
		
		vm.posts = [];
//		vm.posts.push({id: 1, title: 'Site Update 8/26/2016', lastComment: '8/26/2016'});
//		vm.posts.push({id: 2, title: 'Hello News', lastComment: '8/26/2016'});
		
		
		vm.loadPosts = function(){
			$http.post(configService.nodeAddress + '/forum/',$state.params).then(function(value) {
				console.log(value.data);
				vm.posts = value.data;
			});
		};
		vm.loadPosts();
		
		
		vm.loadPost = function(post){
			if(post !== undefined){
				$location.path($location.$$path+'/' + post._id);
			}
			else{
				$location.path($location.$$path+'/new');
			}
		};
		
	});
})();
