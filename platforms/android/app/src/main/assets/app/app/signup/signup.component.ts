import { Component, OnInit } from '@angular/core';
// import { sharedServices } from '../shared/shared-services.service';

@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id,
})
export class SignupComponent implements OnInit {
  
    nameValue :  string;
    emailValue : string;
    phoneValue : string;
    passwordValue : string;

  constructor() {}

  submit(){
    alert(this.emailValue +' '+ this.passwordValue);
  }


  ngOnInit() {
  }
}
