import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { sharedService } from "../shared/service";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { Validators,AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  
  valid = "VALID";
      signUpForm: FormGroup;    
     email:AbstractControl;
    username:AbstractControl;
    button:boolean;
constructor(private formBuilder:FormBuilder){  
     this.signUpForm = this.formBuilder.group({
        email: ["",Validators.required],
        username:["",Validators.required],
      });
}

onButtonTap(){
    alert(JSON.stringify(this.signUpForm.status));
}
  
  
  
public input: any;
  public drawer: RadSideDrawer;
  

//   constructor(private router: RouterExtensions,private service: sharedService ,page: Page) {
//       page.actionBarHidden = true;
//       this.input = {
//         "email": "",
//         "password": ""
//     }
//   }

  ngOnInit() {
    if(JSON.stringify(this.signUpForm.status) == this.valid ){
        this.button = true;
    }else{
        this.button = false;
    }
    //   if(ApplicationSettings.getBoolean("authenticated", false)) {
    //     this.router.navigate(["/home"], { clearHistory: true });
    }
    
//   }

//   ngAfterViewInit() {
//       setTimeout(() => {
//           this.drawer = <RadSideDrawer>getRootView();
//           this.drawer.gesturesEnabled = false;
//       }, 100);
//     }

//   public login() {
//     if(this.input.email && this.input.password) {
//         let account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
//         // let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
//         if(this.input.email == account.email && this.input.password == account.password) {
//             // this.service.storage = account;
//             this.service.storage = account.email;
//             ApplicationSettings.setBoolean("authenticated", true);
//             this.router.navigate(["/home"], { clearHistory: true });
//         } else {
//             (new SnackBar()).simple("Incorrect Credentials!");
//         }
//     } else {
//         (new SnackBar()).simple("All Fields Required!");
//     }

//     alert(this.input.email);
//     alert(this.input.password);
//   }
}
