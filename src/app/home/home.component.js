"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var service_1 = require("../shared/service");
var application_1 = require("tns-core-modules/application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
        // this.username = this.service.storage.email;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.drawer = application_1.getRootView();
            _this.drawer.gesturesEnabled = true;
        }, 100);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, service_1.sharedService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFDcEQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUM1RCw2Q0FBa0Q7QUFDbEQsNERBQTJEO0FBUTNEO0lBS0UsdUJBQW9CLE1BQXdCLEVBQVMsT0FBc0I7UUFBdkQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3pFLDhDQUE4QztJQUMvQyxDQUFDO0lBRUYsZ0NBQVEsR0FBUjtRQUVFLElBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE1BQU0sR0FBa0IseUJBQVcsRUFBRSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBMUJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTTRCLHlCQUFnQixFQUFrQix1QkFBYTtPQUxoRSxhQUFhLENBNEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IHNoYXJlZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VcIjtcbmltcG9ydCB7IGdldFJvb3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcbiAgdXNlck5hbWU7XG4gIHVzZXJFbWFpbDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBzZXJ2aWNlOiBzaGFyZWRTZXJ2aWNlKSB7XG4gICAgLy8gdGhpcy51c2VybmFtZSA9IHRoaXMuc2VydmljZS5zdG9yYWdlLmVtYWlsO1xuICAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYoIUFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgZmFsc2UpKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHRoaXMuZHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG4gICAgfSwgMTAwKTtcbiAgfVxuICBcbn1cbiJdfQ==