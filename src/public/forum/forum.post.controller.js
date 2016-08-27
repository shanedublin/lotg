(function(){
	'use-strict';
	angular.module('lotg.forum').controller('forumPostController',function($state,configService,$http){
	//	console.log('Forum Subject Controller loaded');
		var vm = this;
		vm.name = $state.params.subject;
		console.log($state.params);
		
		vm.edit = false;
		vm.deleted = false;
		
		vm.post = {};
		
		
		
		
		vm.replies = [];
		vm.replies.push({name: 'User 1', message: ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'});
		vm.replies.push({name: 'User 2', message: ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'});
		
		vm.savePost = function(){
			vm.post.subject = $state.params.subject;
			$http.post(configService.nodeAddress+'/forum/post/save',vm.post).then(function(value){
				console.log(value.data);
				angular.copy(value.data,vm.post);
				vm.edit = false;
			});
		};
		
		vm.getPost =  function getPost(){
			
			$http.post(configService.nodeAddress+ '/forum/post/get' , $state.params).then(function(value){
				console.log(value.data);
				angular.copy(value.data,vm.post);
			});
		};
		
		vm.deletePost =function deletePost(){
			
			$http.post(configService.nodeAddress+ '/forum/post/delete', $state.params).then(function(value){
				console.log(value.data);
				vm.deleted = true;
			});
		};
		
		vm.saveComment = function(comment){	
			
			if(vm.post.replies === undefined || vm.post.replies === null){
				vm.post.replies = [];
			}
			vm.post.replies.push(comment);
			
			$http.post(configService.nodeAddress+'/forum/post/save',vm.post).then(function(value){
				console.log(value.data);
				angular.copy(value.data,vm.post);
				angular.copy({},comment);
				vm.edit = false;
			});
		};
		
		if($state.params.id === 'new'){
			vm.edit = true;
		}
		else{
			vm.getPost();
		}
		
		
	});
})();
