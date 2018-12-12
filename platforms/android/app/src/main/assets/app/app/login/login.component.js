"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var service_1 = require("../shared/service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, data, page) {
        this.router = router;
        this.data = data;
        page.actionBarHidden = true;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/home"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.input.email && this.input.password) {
            var account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
            // let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if (this.input.email == account.email && this.input.password == account.password) {
                // this.data.storage = account;
                this.data.storage = account.email;
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/home"], { clearHistory: true });
            }
            else {
                (new nativescript_snackbar_1.SnackBar()).simple("Incorrect Credentials!");
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, service_1.Data, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QixzREFBK0Q7QUFDL0QsK0RBQWlEO0FBQ2pELDBEQUE0RDtBQUM1RCw2Q0FBeUM7QUFRekM7SUFJRSx3QkFBb0IsTUFBd0IsRUFBUyxJQUFVLEVBQUUsSUFBVTtRQUF2RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFDM0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtJQUNILENBQUM7SUFJRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0UsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLDRFQUE0RTtZQUM1RSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDN0UsK0JBQStCO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNsQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0gsQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7YUFBTTtZQUNILENBQUMsSUFBSSxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFuQ1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLNEIseUJBQWdCLEVBQWUsY0FBSSxFQUFRLFdBQUk7T0FKaEUsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcHVibGljIGlucHV0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgZGF0YTogRGF0YSAscGFnZTogUGFnZSkge1xyXG4gICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB7XHJcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IEpTT04ucGFyc2UoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcodGhpcy5pbnB1dC5lbWFpbCwgXCJ7fVwiKSk7XHJcbiAgICAgICAgLy8gbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcclxuICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsID09IGFjY291bnQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCA9PSBhY2NvdW50LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YS5zdG9yYWdlID0gYWNjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0b3JhZ2UgPSBhY2NvdW50LmVtYWlsO1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19