"use strict";
var core_1 = require("@angular/core");
var shared_1 = require("./shared");
var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.title = this.api.title;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [shared_1.ApiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map