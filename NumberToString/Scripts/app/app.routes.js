/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var convertApp;
(function (convertApp) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "convertApp.controllers.convertNumberController", templateUrl: "Scripts/app/views/content.html", controllerAs: "converter" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    convertApp.Routes = Routes;
})(convertApp || (convertApp = {}));
