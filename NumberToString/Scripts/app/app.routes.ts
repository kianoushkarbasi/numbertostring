/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
module convertApp {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "convertApp.controllers.convertNumberController", templateUrl: "Scripts/app/views/content.html", controllerAs: "converter" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}