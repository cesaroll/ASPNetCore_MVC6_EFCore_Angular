// simpleControlls.js
(function () {

    "use strict";

    angular.module("simpleControlls", [])
        .directive("waitCursor", waitCursor);

    function waitCursor() {
        return {
            templateUrl: "/views/waitCursor.html",
            restrict: "E",
            scope: {
                show: "=displayWhen"
            }
        };
    }

})();