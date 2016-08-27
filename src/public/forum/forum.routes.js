(function(){
  'use-strict';

  angular.module('lotg.forum').config(function($stateProvider, $urlRouterProvider){
     // console.log("Forum Routes Loaded");      
      $stateProvider.state('forum',{
        url:"/forum",
        templateUrl:'/forum/forum.html',
        controller: 'forumController as forum'
      }).state('forum-subject',{
    	  url:'/forum/:subject',
    	  templateUrl: '/forum/forum.subject.html',
    	  controller: 'forumSubjectController as forumSubject'
      }).state('forum-subject-post',{
    	  url:'/forum/:subject/{id}',
    	  templateUrl: '/forum/forum.post.html',
    	  controller: 'forumPostController as forumPost'
    	  
      }).state('forum-subject-new',{
    	  url:'/forum/:subject/new',
    	  templateUrl: '/forum/forum.post.html',
    	  controller: 'forumPostController as forumPost'
    	  
      });     

  }).run(function(headerFactory,$state){
	  headerFactory.addLink({name:'Forum',url:'#/forum'});	  

  });

})();