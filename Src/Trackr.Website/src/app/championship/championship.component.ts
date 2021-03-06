import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import { ChampionshipService } from "./championship.service";
import { ChampionshipOverview } from "./domain/championshipOverview.interface";

@Component({
  templateUrl: "./championship.component.html",
  styleUrls: ["championship.component.scss"]
})
export class ChampionshipComponent implements OnInit {
  public championshipId: number;
  public championship: ChampionshipOverview;

  public isProd = environment.production;

  public raceColumns = ["position", "name", "time", "laps"];
  public standingColumns = ["position", "name", "points"];

  constructor(
    private route: ActivatedRoute,
    private championshipService: ChampionshipService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Get the Championship ID from the URL and save it locally.
      this.championshipId = params["cId"];

      // Call the service to retrieve the data from the API.
      this.championshipService.getChampionship(this.championshipId)
        .then((result: ChampionshipOverview) => {
          this.championship = result;
        })
        .catch((err: Error) => {
          console.error(err);
        });
    });
  }
}
