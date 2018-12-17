import { Component, NgZone} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { sharedService } from "./shared/service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent{
    
    _activatedUrl: string;
    userData = this.service.storage;

    constructor(private router: Router, private service: sharedService, private zone: NgZone) {
        // Use the component constructor to inject services.
        // this.zone.run(() => {
        //     this.email = this.service.storage.email;
        //     this.name = this.service.storage.fName;
        //   });
    }

    ngOnInit(){

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        // this.email = this.service.storage.email;
        // this.name = this.service.storage.fName;
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
