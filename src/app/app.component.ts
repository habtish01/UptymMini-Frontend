import { Component } from "@angular/core";
import { Event, Router, NavigationStart, NavigationEnd } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { PlatformLocation } from "@angular/common";
import { NgxPermissionsService } from "ngx-permissions";
import { filter } from "rxjs/operators";
import { UserDto } from "src/@core/models/security/User";
declare var gtag;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  currentUrl: string;

  constructor(
    public _router: Router,
    location: PlatformLocation,
    private spinner: NgxSpinnerService,
    private permissionsService: NgxPermissionsService
  ) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.spinner.show();
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf("/") + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.spinner.hide();
      }
      window.scrollTo(0, 0);
    });

    let loggedInUser: UserDto;
    loggedInUser = JSON.parse(localStorage.getItem("uptym_user"));
    const navEndEvents = _router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag("config", "UA-257282370-1", {
        page_path: event.urlAfterRedirects,
        // 'user_id':loggedInUser.id,
        // 'customer_id':loggedInUser.customerID
      });
    });
  }

  ngOnInit() {
    this.loadPermissions();
  }

  loadPermissions() {
    let user = JSON.parse(localStorage.getItem("uptym_user"));
    if (user && user.userRoles) {
      this.permissionsService.loadPermissions(user.userRoles);
    }
  }
}
