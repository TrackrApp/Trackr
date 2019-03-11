import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Race } from "../shared/domain/race.interface";
import { RacesService } from "./races.service";

@Component({
  templateUrl: "./races.component.html",
  styleUrls: ["races.component.scss"]
})
export class RacesComponent implements OnInit {
  public championshipId: number;
  public races: Race[];

  constructor(
    private route: ActivatedRoute,
    private racesService: RacesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Get the Championship ID from the URL and save it locally.
      this.championshipId = params["cId"];

      // Call the service to retrieve the data from the API.
      this.racesService.getRaces(this.championshipId)
        .then((result: Race[]) => {
          this.races = result;
        })
        .catch((err: Error) => {
          console.error(err);
        });
    });
  }
}
