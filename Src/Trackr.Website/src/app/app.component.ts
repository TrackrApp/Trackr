import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Event, NavigationStart, Router } from "@angular/router";
import { AppVersionService } from "./shared/version/version.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  @ViewChild("snav") sideNav: MatSidenav;

  public mobileQuery: MediaQueryList;
  public sidebarOpened: boolean;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router) {

    this.mobileQuery = media.matchMedia("(min-width: 768px");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && !this.mobileQuery.matches) {
        this.sideNav.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
