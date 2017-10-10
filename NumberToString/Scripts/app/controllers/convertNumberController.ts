/// <reference path="../services/convertNumberService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
module convertApp.controllers {
    export interface Scope {
        name: string;
        amount: string;
        getConvert:any;
    }
    export class convertNumberController  {

        convertNumberService: convertApp.Interfaces.IConvertNumber;
 
        static $inject = ["$scope","convertApp.Services.ConvertService"];
        $onInit() { }
        constructor($scope: Scope, convertNumberService: convertApp.Interfaces.IConvertNumber) {
            this.convertNumberService = convertNumberService;
            $scope.name = "**";
            $scope.amount = "123";

            $scope.getConvert = (name, amount) => {
                this.convertNumberService.get(name, amount).then(function successCallback(response) {
                    $scope.name = response.data.name;
                    $scope.amount = response.data.amount;
                }, function errorCallback(response) {

                });
            }
                       
        }

    
    }

    angular.module("convertApp").controller("convertApp.controllers.convertNumberController", convertNumberController);
} 