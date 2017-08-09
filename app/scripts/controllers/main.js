'use strict';
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */
angular.module('intellicarApp')
  .controller('MainCtrl', function ($scope, $timeout,$http,dataService,$interval,mqttService) {

    var vm = this;
    var val = 1;


   function getData() {
            dataService.getCars(function (data) {
                vm.cardata = data;
                console.log(vm.cardata)
            })
        }


    vm.init = function(){
            $interval(function () {
                getData();
            },60000)
            getData();
        }

    vm.init();

    //MQTT







  });
