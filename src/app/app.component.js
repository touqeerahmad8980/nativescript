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
        this.userData = this.service.storage;
        // Use the component constructor to inject services.
        // this.zone.run(() => {
        //     this.email = this.service.storage.email;
        //     this.name = this.service.storage.fName;
        //   });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
        // this.email = this.service.storage.email;
        // this.name = this.service.storage.fName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsMENBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxrREFBb0Q7QUFDcEQsNENBQWlEO0FBT2pEO0lBS0ksc0JBQW9CLE1BQWMsRUFBVSxPQUFzQixFQUFVLElBQVk7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBRnhGLGFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUc1QixvREFBb0Q7UUFDcEQsd0JBQXdCO1FBQ3hCLCtDQUErQztRQUMvQyw4Q0FBOEM7UUFDOUMsUUFBUTtJQUNaLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFMRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDakIsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO1FBQ25GLDJDQUEyQztRQUMzQywwQ0FBMEM7SUFDOUMsQ0FBQztJQUdELGlDQUFVLEdBQVYsVUFBVyxHQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFuQ1EsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FNOEIsZUFBTSxFQUFtQix1QkFBYSxFQUFnQixhQUFNO09BTC9FLFlBQVksQ0FxQ3ZCO0lBQUQsbUJBQUM7Q0FBQSxBQXJDRixJQXFDRTtBQXJDVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgc2hhcmVkU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnR7XG4gICAgXG4gICAgX2FjdGl2YXRlZFVybDogc3RyaW5nO1xuICAgIHVzZXJEYXRhID0gdGhpcy5zZXJ2aWNlLnN0b3JhZ2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IHNoYXJlZFNlcnZpY2UsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICAgICAgLy8gdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmVtYWlsID0gdGhpcy5zZXJ2aWNlLnN0b3JhZ2UuZW1haWw7XG4gICAgICAgIC8vICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlcnZpY2Uuc3RvcmFnZS5mTmFtZTtcbiAgICAgICAgLy8gICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgIC8vIHRoaXMuZW1haWwgPSB0aGlzLnNlcnZpY2Uuc3RvcmFnZS5lbWFpbDtcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gdGhpcy5zZXJ2aWNlLnN0b3JhZ2UuZk5hbWU7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIG9uU2VsZWN0ZWQodXJsOnN0cmluZyk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICAgIH1cbiAgICBcbiAgICBjbG9zZU1lbnUoKXtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9nT3V0KCl7XG4gICAgICAgIHRoaXMuc2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG5cbiB9XG4iXX0=