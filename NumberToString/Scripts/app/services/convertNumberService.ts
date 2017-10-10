/// <reference path="../interfaces/interfaces.ts" />
module convertApp.Services {

    export class ConvertService implements convertApp.Interfaces.IConvertNumber {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        get = (name,amount) => {
            var res: convertApp.Interfaces.IAccountHolder =
                { name: name, amount: amount };
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
            return this.httpService.get("api/convert/get/?name='" + name + "'&amount=" + amount)
                
        }
    }
    angular.module("convertApp").service("convertApp.Services.ConvertService", ConvertService);
} 