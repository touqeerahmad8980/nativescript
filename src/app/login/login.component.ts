import { Component, OnInit } from '@angular/core';
// import {Page} from "ui/page";
// import { RouterExtensions } from 'nativescript-angular/router';
// import { SnackBar } from "nativescript-snackbar";
// import * as ApplicationSettings from "application-settings";
// import { sharedService } from "../shared/service";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

    
    loginForm: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    buttonValue:boolean = true;

    constructor(private fb: FormBuilder) {

        
    }

    ngOnInit() {

        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        // this.onTextChange();

    }

    onTextChange(){
        alert(this.loginForm.valid);
        JSON.stringify(this.loginForm);
        if(this.loginForm.valid){
            this.buttonValue = false;
        }else{
            this.buttonValue = true;
        }
    }

    get validate() { return this.loginForm.controls; }

    // onSubmit() {
    //     alert(`button: ${this.buttonValue}`);
    //     alert(`Contact form valid: ${this.loginForm.invalid}`);
    //     alert(`Contact form untouched: ${this.loginForm.untouched}`);
    //     alert(`Contact form touched: ${this.loginForm.touched}`);
    //     alert(`Contact form value: ${JSON.stringify(this.loginForm.value)}`);
    // }
  
//     signUpForm: FormGroup;    
//      email:AbstractControl;
//     username:AbstractControl;
//     button:boolean;
// constructor(private formBuilder:FormBuilder){  
//      this.signUpForm = this.formBuilder.group({
//         email: ["",Validators.required],
//         username:["",Validators.required],
//       });
// }

// onButtonTap(){
//     alert(JSON.stringify(this.signUpForm.value));
// }
  
  
// ngOnInit() {
//     this.onButtonTap();
//   if(JSON.stringify(this.signUpForm.status) == "VALID" ){
//       this.button = false;
//   }else{
//       this.button = true;
//   }
  
    public input: any;
    public drawer: RadSideDrawer;
    username: any;

    
    // constructor(private router: RouterExtensions,private service: sharedService ,page: Page) {
    //     page.actionBarHidden = true;
    //     this.input = {
    //         email: "",
    //         password: ""
    //     }
    // }
    
    // ngOnInit() {
    //     if(ApplicationSettings.getBoolean("authenticated", false)) {
    //         this.router.navigate(["/home"], { clearHistory: true });
    //     }
    // }
    

  ngAfterViewInit() {
      setTimeout(() => {
          this.drawer = <RadSideDrawer>getRootView();
          this.drawer.gesturesEnabled = false;
      }, 100);
    }

//   login() {
//     if(this.input.email && this.input.password) {
//         let account = JSON.parse(ApplicationSettings.getString(this.input.email, "{}"));
//         if(this.input.email == account.email && this.input.password == account.password) {
//             this.service.storage = account.email;
//             ApplicationSettings.setBoolean("authenticated", true);
//             this.router.navigate(["/home"], { clearHistory: true });
//         } else {
//             (new SnackBar()).simple("Incorrect Credentials!");
//         }
//     } else {
//         (new SnackBar()).simple("All Fields Required!");
//     }

//     alert(this.input);
//     alert(JSON.stringify(this.username));
//   }
}
