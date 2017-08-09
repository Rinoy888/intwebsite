'use strict';

/**
 * @ngdoc overview
 * @name alFjrApp
 * @description
 * # alFjrApp
 *
 * Main module of the application.
 */
angular
    .module('intellicarApp', [
        'ngResource',
        'ui.router',
        'ngCookies',
        'satellizer',
        'ngAnimate',
        'rzModule',
        'ngSanitize',
        'angular-svg-round-progressbar',
        'nvd3'
        // 'datePicker'
    ])
    .config(function ($stateProvider,$urlRouterProvider, $authProvider) {

        // Satellizer configuration that specifies which API
        // route the JWT should be retrieved from
        // $authProvider.loginUrl = 'http://api.blue.bluroe.com/api/authenticate';
        // $authProvider.baseUrl = 'http://localhost:9000';
        // $authProvider.loginUrl = 'http://api.blue.bluroe.com/api/authenticate';
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',

            })
            .state('products', {
                url: '/products',
                templateUrl: 'views/products.html',

            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',

            })
    })
    // .run(function($rootScope, $location, $state, $stateParams, $cookieStore) {
    //
    // })
