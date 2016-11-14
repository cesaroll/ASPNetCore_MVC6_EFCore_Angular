﻿// app-trips.js
(function () {
    "use strict";

    //Creating the Module
    angular.module("app-trips", ["ngRoute", "simpleControlls"])
        .config(function ($routeProvider) {

            $routeProvider.when("/", {
                controller: "tripsController",
                controllerAs: "vm",
                templateUrl: "/views/tripsView.html"
            });

            $routeProvider.otherwise({redirectTo: "/"}); //Any other not provided route would be redirect to first main route

        });

})();