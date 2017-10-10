/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
    var app = angular.module("convertApp", ['ngRoute']);
    app.config(convertApp.Routes.configureRoutes);
})();
