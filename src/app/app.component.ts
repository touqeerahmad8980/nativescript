import { Component, NgZone, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { sharedService } from "./shared/service";
import {Observable} from 'rxjs'; // Angular 6 

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    _activatedUrl: string;
    userName;
    userEmail;
    counter : number = 0;

    constructor(private router: Router, private service: sharedService, private zone: NgZone,
        // private hc: HomeComponent
        ) {
            // alert(hc.userData());
        // Use the component constructor to inject services.
    }

    ngOnInit() {

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        // this.child.userData();
        this.userEmail.subscribe(x => this.service.storage.email = x);
        this.userName = this.service.storage.fName;

    }

    onSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    closeMenu() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    logOut() {
        this.service.logout();
        this.closeMenu();
    }

    
    userData(){
        this.userEmail = this.service.storage.email;
        this.userName = this.service.storage.fName;
        alert(this.counter++);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.userData();
        }, 100);
    }

}
