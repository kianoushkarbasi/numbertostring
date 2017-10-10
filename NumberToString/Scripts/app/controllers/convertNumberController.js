/// <reference path="../services/convertNumberService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
var convertApp;
(function (convertApp) {
    var controllers;
    (function (controllers) {
        var convertNumberController = /** @class */ (function () {
            function convertNumberController($scope, convertNumberService) {
                var _this = this;
                this.convertNumberService = convertNumberService;
                $scope.name = "**";
                $scope.amount = "123";
                $scope.getConvert = function (name, amount) {
                    _this.convertNumberService.get(name, amount).then(function successCallback(response) {
                        $scope.name = response.data.name;
                        $scope.amount = response.data.amount;
                    }, function errorCallback(response) {
                    });
                };
            }
            convertNumberController.prototype.$onInit = function () { };
            convertNumberController.$inject = ["$scope", "convertApp.Services.ConvertService"];
            return convertNumberController;
        }());
        controllers.convertNumberController = convertNumberController;
        angular.module("convertApp").controller("convertApp.controllers.convertNumberController", convertNumberController);
    })(controllers = convertApp.controllers || (convertApp.controllers = {}));
})(convertApp || (convertApp = {}));
