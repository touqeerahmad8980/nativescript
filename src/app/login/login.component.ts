import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  
  constructor(page: Page) {
      page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
