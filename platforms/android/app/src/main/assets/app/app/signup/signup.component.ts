import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id,
})
export class SignupComponent implements OnInit {
    
    public input: any;
    name :  string;
    email : string;
    phone : string;
    password : string;

  constructor(private location: Location) {
    this.input = {
      "name" :  "",
      "email" : "",
      "phone" : "",
      "password" : ""
    }
  }

  ngOnInit() {
  }

  public register() {
    if(this.input.name && this.input.email && this.input.phone && this.input.password) {
        // ApplicationSettings.setString("account", JSON.stringify(this.input));
        ApplicationSettings.setString(this.input.email, JSON.stringify(this.input));
        this.location.back();
    } else {
        (new SnackBar()).simple("All Fields Required!");
    }
  }

}
