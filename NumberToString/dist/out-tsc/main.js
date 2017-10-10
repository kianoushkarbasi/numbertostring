(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/platform-browser-dynamic", "./app/app.module", "./environments/environment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    var app_module_1 = require("./app/app.module");
    var environment_1 = require("./environments/environment");
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
        .catch(function (err) { return console.log(err); });
});
//# sourceMappingURL=main.js.map