import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { Data } from "../shared/service";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  
  currentUser;

  constructor(private router: RouterExtensions,private data: Data) { }

  ngOnInit() {
    if(!ApplicationSettings.getBoolean("authenticated", false)) {
      this.router.navigate(["/login"], { clearHistory: true });
    }else{
      this.currentUser = this.data.storage;
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  public logout() {
    ApplicationSettings.remove("authenticated");
    this.router.navigate(["/login"], { clearHistory: true });
  }
  
}
