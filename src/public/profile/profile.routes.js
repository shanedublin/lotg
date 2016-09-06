(function(){
  'use-strict';

  angular.module('lotg.profile').config(function($stateProvider, $urlRouterProvider){
     
      $stateProvider.state('profile',{
        url:"/profile",
        templateUrl:'/profile/profile.html',
        controller: 'profileController as profile'
      });

  });

})();