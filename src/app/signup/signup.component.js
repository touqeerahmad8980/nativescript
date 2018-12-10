"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_services_service_1 = require("../shared/shared-services.service");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(service) {
        this.service = service;
        this.message = "";
    }
    SignupComponent.prototype.submit = function () {
        this.makePostRequest();
    };
    SignupComponent.prototype.makePostRequest = function () {
        var _this = this;
        this.service
            .postData({ username: this.user, password: this.pass })
            .subscribe(function (res) {
            _this.message = res.json.data.username;
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [shared_services_service_1.sharedServices])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkVBQW1FO0FBUW5FO0lBSUUseUJBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRHBDLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFDa0IsQ0FBQztJQUV4QyxnQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx5Q0FBZSxHQUF2QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE9BQU87YUFDVCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsT0FBTyxHQUFTLEdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQW5CVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUs2Qix3Q0FBYztPQUpoQyxlQUFlLENBb0IzQjtJQUFELHNCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFyZWRTZXJ2aWNlcyB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQtc2VydmljZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXNpZ251cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbnVwLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgdXNlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYXNzOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBzaGFyZWRTZXJ2aWNlcykge31cclxuXHJcbiAgcHVibGljIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMubWFrZVBvc3RSZXF1ZXN0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAucG9zdERhdGEoeyB1c2VybmFtZTogdGhpcy51c2VyLCBwYXNzd29yZDogdGhpcy5wYXNzIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=