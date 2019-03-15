import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Event, NavigationStart, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  @ViewChild("snav") sideNav: MatSidenav;

  public mobileQuery: MediaQueryList;
  public sidebarOpened: boolean;
  public selectedLanguage = "en";

  private _mobileQueryListener: () => void;

  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private translateService: TranslateService) {

    // Listen to media query to detect mobile device / responsive design.
    this.mobileQuery = media.matchMedia("(min-width: 768px");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // Subscribe to Router events, and close the menu after navigating on a mobile device.
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && !this.mobileQuery.matches) {
        this.sideNav.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**
   * Change the language for the app.
   *
   * @param language The new language to use.
   */
  public changeLanguage(language: string): void {
    // Set the selected language locally.
    this.selectedLanguage = language;

    // Change the language.
    this.translateService.use(language);
  }
}
