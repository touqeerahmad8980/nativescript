import { Component, OnInit } from '@angular/core';
import { sharedServices } from '../shared/shared-services.service';

@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id,
})
export class SignupComponent implements OnInit {
  public user: string;
  public pass: string;
  public message: string = "";
  constructor(private service: sharedServices) {}

  public submit() {
    this.makePostRequest();
  }

  private makePostRequest() {
    this.service
      .postData({ username: this.user, password: this.pass })
      .subscribe(res => {
          this.message = (<any>res).json.data.username;
      });
  }

  ngOnInit() {
  }
}
