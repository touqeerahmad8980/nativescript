import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Injectable()
export class sharedService{
    public storage: any;
    
    constructor(private router: RouterExtensions) {}

    
    ngOnInit() {
    }

    logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
        alert('logout');
    }

}