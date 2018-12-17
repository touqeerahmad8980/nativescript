"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var service_1 = require("../shared/service");
var application_1 = require("tns-core-modules/application");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, page) {
        this.router = router;
        this.service = service;
        page.actionBarHidden = true;
        this.input = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/home"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.input.email && this.input.password) {
            var account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            // let account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
            if (this.input.email == account.email && this.input.password == account.password) {
                this.service.storage = account;
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/home"], { clearHistory: true });
                return this.service.storage;
            }
            else {
                (new nativescript_snackbar_1.SnackBar()).simple("Incorrect Credentials!");
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.drawer = application_1.getRootView();
            _this.drawer.gesturesEnabled = false;
        }, 100);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, service_1.sharedService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QixzREFBK0Q7QUFDL0QsK0RBQWlEO0FBQ2pELDBEQUE0RDtBQUM1RCw2Q0FBa0Q7QUFFbEQsNERBQTJEO0FBUTNEO0lBTUksd0JBQW9CLE1BQXdCLEVBQVMsT0FBc0IsRUFBRSxJQUFVO1FBQW5FLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN2RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUE7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNJLElBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekUsbUZBQW1GO1lBQ25GLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQy9CLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDckQ7U0FDSjthQUFNO1lBQ0gsQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFBQSxpQkFLQztRQUpHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxNQUFNLEdBQWtCLHlCQUFXLEVBQUUsQ0FBQztZQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQXpDUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU84Qix5QkFBZ0IsRUFBa0IsdUJBQWEsRUFBUSxXQUFJO09BTjlFLGNBQWMsQ0EyQzFCO0lBQUQscUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBzaGFyZWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJ9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBnZXRSb290VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBpbnB1dDogYW55O1xyXG4gICAgdXNlcm5hbWU6IGFueTtcclxuICAgIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHNlcnZpY2U6IHNoYXJlZFNlcnZpY2UgLHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcclxuICAgICAgICAgICAgLy8gbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKHRoaXMuaW5wdXQuZW1haWwsIFwie31cIikpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsID09IGFjY291bnQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCA9PSBhY2NvdW50LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc3RvcmFnZSA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zdG9yYWdlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==