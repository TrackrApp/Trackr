import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Race } from "../shared/domain/race.interface";
import { RaceService } from "./race.service";

@Component({
  templateUrl: "./race.component.html",
  styleUrls: ["race.component.scss"]
})
export class RaceComponent implements OnInit {
  public championshipId: number;
  public raceId: number;
  public race: Race;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService) { }

  ngOnInit() {
    // Get the Championship and Race ID from the URL and save it locally.
    // This is used in the component HTML to link to Sessions.
    this.route.params.subscribe(params => {
      this.championshipId = params["cId"];
      this.raceId = params["rId"];

      this.raceService.getRace(this.raceId)
        .then((result: Race) => {
          this.race = result;
          console.log(result);
        });
    });
  }
}
