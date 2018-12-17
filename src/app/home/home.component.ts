import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { sharedService } from "../shared/service";
import { getRootView } from "tns-core-modules/application";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  
  public drawer: RadSideDrawer;
  username;
  constructor(private router: RouterExtensions,private service: sharedService) {
    // this.username = this.service.storage.email;
   }

  ngOnInit() {
    if(!ApplicationSettings.getBoolean("authenticated", false)) {
      this.router.navigate(["/login"], { clearHistory: true });
    }

  }
  
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  ngAfterViewInit() {
    setTimeout(() => {
        this.drawer = <RadSideDrawer>getRootView();
        this.drawer.gesturesEnabled = true;
    }, 100);
  }
  
}
