﻿// tripsController.js
(function () {

    "use strict";

    // getting existing module
    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController(){

        var vm = this;

        vm.trips = [{
            name: "US Trip",
            created: new Date()
        }, {
            name: "World trip",
            created: new Date()
        }];

        vm.newTrip = {};

        vm.addTrip = function () {
            vm.trips.push({ name: vm.newTrip.name, created: new Date() });
            vm.newTrip = {};
        }
    }

})();