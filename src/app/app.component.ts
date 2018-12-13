import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { sharedService } from "./shared/service";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    
    private _activatedUrl: string;

    constructor(private router: Router, private service: sharedService) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
    
    onSelected(url:string):boolean{
        return this._activatedUrl === url;
    }
    
    closeMenu(){
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    logOut(){
        this.service.logout();
        this.closeMenu();
    }
 }
