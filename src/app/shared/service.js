"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var sharedService = /** @class */ (function () {
    function sharedService(router) {
        this.router = router;
    }
    sharedService.prototype.ngOnInit = function () {
        return this.storage;
    };
    sharedService.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
        alert('logout');
    };
    sharedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], sharedService);
    return sharedService;
}());
exports.sharedService = sharedService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQStEO0FBQy9ELDBEQUE0RDtBQUc1RDtJQUdJLHVCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFHaEQsZ0NBQVEsR0FBUjtRQUNBLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFkUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBSW1CLHlCQUFnQjtPQUhuQyxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIHNoYXJlZFNlcnZpY2V7XHJcbiAgICBwdWJsaWMgc3RvcmFnZTogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoXCJhdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ291dCcpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==