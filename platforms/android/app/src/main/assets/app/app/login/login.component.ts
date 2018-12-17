import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { sharedService } from "../shared/service";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
    
    input: any;
    username: any;
    drawer: RadSideDrawer;

    constructor(private router: RouterExtensions,private service: sharedService ,page: Page) {
        page.actionBarHidden = true;
        this.input = {
            email: "",
            password: ""
        }
    }
    ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/home"], { clearHistory: true });
        }
    }

    login() {
        if(this.input.email && this.input.password) {
            let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            // let account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
            if(this.input.email == account.email && this.input.password == account.password) {
                this.service.storage = account;
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/home"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Incorrect Credentials!");
            }
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.drawer = <RadSideDrawer>getRootView();
            this.drawer.gesturesEnabled = false;
        }, 100);
    }

}
