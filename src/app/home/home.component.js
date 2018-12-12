"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var service_1 = require("../shared/service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
        else {
            this.currentUser = this.data.storage;
        }
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, service_1.Data])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFDcEQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUM1RCw2Q0FBeUM7QUFRekM7SUFJRSx1QkFBb0IsTUFBd0IsRUFBUyxJQUFVO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFcEUsZ0NBQVEsR0FBUjtRQUNFLElBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxRDthQUFJO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXRCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUs0Qix5QkFBZ0IsRUFBZSxjQUFJO09BSnBELGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBjdXJyZW50VXNlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBkYXRhOiBEYXRhKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZighQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5kYXRhLnN0b3JhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dCgpIHtcclxuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==