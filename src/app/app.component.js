"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var app = require("tns-core-modules/application");
var service_1 = require("./shared/service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, service, zone) {
        this.router = router;
        this.service = service;
        this.zone = zone;
        this.counter = 0;
        // alert(hc.userData());
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
        // this.child.userData();
        this.userEmail.subscribe(function (x) { return _this.service.storage.email = x; });
        this.userName = this.service.storage.fName;
    };
    AppComponent.prototype.onSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.closeMenu = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.logOut = function () {
        this.service.logout();
        this.closeMenu();
    };
    AppComponent.prototype.userData = function () {
        this.userEmail = this.service.storage.email;
        this.userName = this.service.storage.fName;
        alert(this.counter++);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userData();
        }, 100);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, service_1.sharedService, core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxrREFBb0Q7QUFDcEQsNENBQWlEO0FBUWpEO0lBT0ksc0JBQW9CLE1BQWMsRUFBVSxPQUFzQixFQUFVLElBQVk7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBRnhGLFlBQU8sR0FBWSxDQUFDLENBQUM7UUFLYix3QkFBd0I7UUFDNUIsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFQRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDakIsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO1FBQ25GLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUUvQyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFBQSxpQkFJQztRQUhHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBbERRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBUThCLGVBQU0sRUFBbUIsdUJBQWEsRUFBZ0IsYUFBTTtPQVAvRSxZQUFZLENBb0R4QjtJQUFELG1CQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgc2hhcmVkU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7IC8vIEFuZ3VsYXIgNiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTtcclxuICAgIHVzZXJFbWFpbDtcclxuICAgIGNvdW50ZXIgOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogc2hhcmVkU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBoYzogSG9tZUNvbXBvbmVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBhbGVydChoYy51c2VyRGF0YSgpKTtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hpbGQudXNlckRhdGEoKTtcclxuICAgICAgICB0aGlzLnVzZXJFbWFpbC5zdWJzY3JpYmUoeCA9PiB0aGlzLnNlcnZpY2Uuc3RvcmFnZS5lbWFpbCA9IHgpO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLnNlcnZpY2Uuc3RvcmFnZS5mTmFtZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB1c2VyRGF0YSgpe1xyXG4gICAgICAgIHRoaXMudXNlckVtYWlsID0gdGhpcy5zZXJ2aWNlLnN0b3JhZ2UuZW1haWw7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuc2VydmljZS5zdG9yYWdlLmZOYW1lO1xyXG4gICAgICAgIGFsZXJ0KHRoaXMuY291bnRlcisrKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGEoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=