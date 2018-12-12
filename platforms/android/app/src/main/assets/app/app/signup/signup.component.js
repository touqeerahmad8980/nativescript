"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(location) {
        this.location = location;
        this.input = {
            "name": "",
            "email": "",
            "phone": "",
            "password": ""
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        if (this.input.name && this.input.email && this.input.phone && this.input.password) {
            // ApplicationSettings.setString("account", JSON.stringify(this.input));
            ApplicationSettings.setString(this.input.email, JSON.stringify(this.input));
            this.location.back();
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [common_1.Location])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQTJDO0FBQzNDLCtEQUFpRDtBQUNqRCwwREFBNEQ7QUFRNUQ7SUFRRSx5QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsTUFBTSxFQUFJLEVBQUU7WUFDWixPQUFPLEVBQUcsRUFBRTtZQUNaLE9BQU8sRUFBRyxFQUFFO1lBQ1osVUFBVSxFQUFHLEVBQUU7U0FDaEIsQ0FBQTtJQUNILENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDRSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQy9FLHdFQUF3RTtZQUN4RSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBNUJVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUzhCLGlCQUFRO09BUjNCLGVBQWUsQ0E4QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtc2lnbnVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAuY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIG5hbWUgOiAgc3RyaW5nO1xyXG4gICAgZW1haWwgOiBzdHJpbmc7XHJcbiAgICBwaG9uZSA6IHN0cmluZztcclxuICAgIHBhc3N3b3JkIDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgdGhpcy5pbnB1dCA9IHtcclxuICAgICAgXCJuYW1lXCIgOiAgXCJcIixcclxuICAgICAgXCJlbWFpbFwiIDogXCJcIixcclxuICAgICAgXCJwaG9uZVwiIDogXCJcIixcclxuICAgICAgXCJwYXNzd29yZFwiIDogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXIoKSB7XHJcbiAgICBpZih0aGlzLmlucHV0Lm5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBob25lICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgICAgICAvLyBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKHRoaXMuaW5wdXQuZW1haWwsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW5wdXQpKTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==