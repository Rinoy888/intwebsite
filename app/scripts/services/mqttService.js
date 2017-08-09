'use strict';



angular.module('intellicarApp')
    .service('mqttService', function ( $timeout) {

      var log = console.log;
      var vm = this;
      var rtPorts = ['10105', '10155', '10156', '10157', '10158', '10159'];

      var randomIndex = Math.floor(Math.random() * rtPorts.length);
      vm.socketiohost = "http://localhost:10104";
      vm.socket = null;
      vm.toConnect = true;
      vm.listeners = {};
      vm.socket = null;
      vm.subscriptionList = {};
      vm.authenticated = false;


      vm.initSocket = function () {
          //$log.log('mqtt initSocket');
          if (vm.socket === null && vm.toConnect) {
              console.log("Trying to connect to MQTT");
              vm.connect();
              vm.socket.on('connect', vm.onConnect);
              vm.socket.on('close', vm.onClose);
              vm.toConnect = false;
          }

          $timeout(vm.initSocket, 5000);
      };


      vm.onConnect = function () {
          console.log('Connected to MQTT onConnect');
          if (vm.socket !== null) {
              vm.toConnect = true;
              vm.socket.on('mqtt', vm.onReceiveMsg);
          } else {
              console.log("mqtt connect error");
          }
      };


      vm.connect = function () {
          log('mqtt connect');
          vm.socket = io.connect(vm.socketiohost);
      };

      vm.onReceiveMsg = function (msg) {
            log('mqtt onReceiveMsg');
            //$log.log(JSON.stringify(msg));

            var topicKey = vm.getTopicKey(msg);
            if (topicKey == null) {
                $log.log("Invalid mqtt msg");
                $log.log(msg);
                return;
            }

            //$log.log(topicKey);
            vm.callListeners(msg, topicKey);
        };

        vm.initSocket();


});
