import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id,
})
export class SignupComponent implements OnInit {

  constructor(page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
