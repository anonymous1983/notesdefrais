'use strict';

var G = {
  app: {
    name: 'flyingBillApp'
  }
};

(function () {

  angular.module(G.app.name, [
    'ui.router',
    'ngMaterial',
    'ngStorage'
  ])

    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {

        $stateProvider
          .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'js/home/templates/home.html'
          })
          .state('main', {
            abstract: true,
            url: '/main',
            controller: 'MainController',
            templateUrl: 'js/main/templates/main.html'
          })
          .state('main.billAdd', {
            url: '/bill/add',
            views: {
              'viewPageContainerHeader': {
                templateUrl: 'js/main/templates/header.html'
              },
              'viewPageContainerBodyCenter': {
                controller: 'BillAddController',
                templateUrl: 'js/main/templates/body/bill/add.body.html'
              }
            }
          })
          .state('main.expenseAdd', {
            url: '/expense/add',
            views: {
              'viewPageContainerHeader': {
                templateUrl: 'js/main/templates/header.html'
              },
              'viewPageContainerBodyCenter': {
                controller: 'ExpenseAddController',
                templateUrl: 'js/main/templates/body/expense/add.body.html',
                resolve: {
                  ExpenseNextId: ['ExpenseProvider', function (ExpenseProvider) {
                    return ExpenseProvider.getExpenseNextId();
                  }]
                }
              }
            }
          })
        ;
        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode(false);
        $compileProvider.debugInfoEnabled(false);
      }])

    .run();

})();