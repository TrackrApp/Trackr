import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Params, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { AppVersionService } from "../version/version.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  private championshipId: number;
  private raceId: number;

  public isChampionshipMenuOpened = true;
  public version: string = this.appVersionService.getVersion();

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private appVersionService: AppVersionService) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        // Go as deep into the route[s] as possible.
        let active = this.route;
        while (active.firstChild) { active = active.firstChild; }

        // Subscribe to the params.
        active.params.subscribe((params: Params) => {
          // Set the id's locally.
          this.championshipId = params["cId"];
          this.raceId = params["rId"];
        });
      });
  }

  public toggleMenuItem(menuItem: any): void {
    this.isChampionshipMenuOpened = !this.isChampionshipMenuOpened;
  }
}
