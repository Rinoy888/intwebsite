'use strict';



angular.module('intellicarApp')
    .service('dataService', function ($http, $interval) {

        var vm = this;

        vm.getCars = function(callback){
            $http.post('http://localhost:10104/api/intellicar60/getnumvehicles')
                .then(function(data) {
                    vm.cars = data.data.data.count;
                    callback(vm.cars);
                    console.log(vm.cars);
                }, function(resp) {
                    console.log(resp)
                });
        }

        // vm.getCars = function(callback){
        //   getCars(callback);
        // }

        vm.getFuel = function(callback){
          $http.post('')
          .then(function(data){
            vm.fuel = data;
          },function(err){
            console.log(err);
          });
        }


});
