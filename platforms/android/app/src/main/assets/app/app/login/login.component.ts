import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { Data } from "../shared/service";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  
  public input: any;

  constructor(private router: RouterExtensions,private data: Data ,page: Page) {
      page.actionBarHidden = true;
      this.input = {
        "email": "",
        "password": ""
    }
  }



  ngOnInit() {
      if(ApplicationSettings.getBoolean("authenticated", false)) {
        this.router.navigate(["/home"], { clearHistory: true });
    }
  }

  public login() {
    if(this.input.email && this.input.password) {
        let account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
        // let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
        if(this.input.email == account.email && this.input.password == account.password) {
            // this.data.storage = account;
            this.data.storage = account.email;
            ApplicationSettings.setBoolean("authenticated", true);
            this.router.navigate(["/home"], { clearHistory: true });
        } else {
            (new SnackBar()).simple("Incorrect Credentials!");
        }
    } else {
        (new SnackBar()).simple("All Fields Required!");
    }
  }
}
