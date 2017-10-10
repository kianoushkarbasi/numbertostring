/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {
    var app = angular.module("convertApp", ['ngRoute']);
    app.config(convertApp.Routes.configureRoutes);
})() 