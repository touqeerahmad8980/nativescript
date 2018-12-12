"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: 'ns-setting',
            templateUrl: './setting.component.html',
            styleUrls: ['./setting.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFRcEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVZVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FZNUI7SUFBRCx1QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXNldHRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5nLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==