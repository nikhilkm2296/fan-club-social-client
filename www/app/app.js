// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var fcSocialApp = angular.module('fc-social', ['ionic', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.constant('SERVER_URL', "http://127.0.0.1")
.constant('SERVER_PORT', "9090")

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {

  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.tabs.style("striped");
  $ionicConfigProvider.views.maxCache(5);

  $httpProvider.interceptors.push('errorHandlerInterceptor');
  $httpProvider.interceptors.push('authExpiredInterceptor');
  $httpProvider.interceptors.push('authInterceptor');
  $httpProvider.interceptors.push('notificationInterceptor');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
      url: '/home',
      abstract: true,
      controller: 'HomeCtrl',
      templateUrl: 'app/views/home/home.html'
    })

  // Each tab has its own nav history stack:
  .state('home.fixtures', {
    url: '/fixtures',
    views: {
      'home-fixtures': {
        templateUrl: 'app/views/home/home-fixtures.html',
        controller: 'HomeFixturesCtrl'
      }
    }
  })

  .state('home.events', {
    url: '/events',
    views: {
      'home-events': {
        templateUrl: 'app/views/home/home-events.html',
        controller: 'HomeEventsCtrl'
      }
    }
  })

  .state('home.feeds', {
    url: '/feeds',
    views: {
      'home-feeds': {
        templateUrl: 'app/views/home/home-feeds.html',
        controller: 'HomeFeedsCtrl'
      }
    }
  })
  
  .state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'app/views/account/login.html'
  })

  .state('signup', {
    url: '/signup',
    controller: 'RegisterCtrl',
    templateUrl: 'app/views/account/register.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
