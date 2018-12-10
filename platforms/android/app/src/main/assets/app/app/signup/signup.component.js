"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { sharedServices } from '../shared/shared-services.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.submit = function () {
        alert(this.emailValue + ' ' + this.passwordValue);
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
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0VBQXNFO0FBUXRFO0lBT0U7SUFBZSxDQUFDO0lBRWhCLGdDQUFNLEdBQU47UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFHRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWZVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7O09BQ1csZUFBZSxDQWdCM0I7SUFBRCxzQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgc2hhcmVkU2VydmljZXMgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLXNlcnZpY2VzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICducy1zaWdudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5jb21wb25lbnQuY3NzJ10sXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgICBuYW1lVmFsdWUgOiAgc3RyaW5nO1xyXG4gICAgZW1haWxWYWx1ZSA6IHN0cmluZztcclxuICAgIHBob25lVmFsdWUgOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZFZhbHVlIDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN1Ym1pdCgpe1xyXG4gICAgYWxlcnQodGhpcy5lbWFpbFZhbHVlICsnICcrIHRoaXMucGFzc3dvcmRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==