import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Standing } from "../shared/domain/standing.interface";
import { StandingsService } from "./standing.service";

@Component({
  templateUrl: "./standings.component.html",
  styleUrls: ["standings.component.scss"]
})
export class StandingsComponent implements OnInit {
  public championshipId: number;
  public standings: Standing[];

  public standingColumns = ["position", "name", "points"];

  constructor(
    private route: ActivatedRoute,
    private standingsService: StandingsService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // Get the Championship ID from the URL and save it locally.
      this.championshipId = params["cId"];

      // Call the service to retrieve the data from the API.
      this.standingsService.getStandings(this.championshipId)
        .then((result: Standing[]) => {
          this.standings = result;
        })
        .catch((err: Error) => {
          console.error(err);
        });
    });
  }
}
