/// <reference path="../interfaces/interfaces.ts" />
var convertApp;
(function (convertApp) {
    var Services;
    (function (Services) {
        var ConvertService = /** @class */ (function () {
            function ConvertService($http) {
                var _this = this;
                this.get = function (name, amount) {
                    var res = { name: name, amount: amount };
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world application
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    return _this.httpService.get("api/convert/get/?name='" + name + "'&amount=" + amount);
                };
                this.httpService = $http;
            }
            ConvertService.$inject = ["$http"];
            return ConvertService;
        }());
        Services.ConvertService = ConvertService;
        angular.module("convertApp").service("convertApp.Services.ConvertService", ConvertService);
    })(Services = convertApp.Services || (convertApp.Services = {}));
})(convertApp || (convertApp = {}));
