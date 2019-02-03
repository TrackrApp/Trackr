import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Race } from "src/app/shared/domain/race.interface";

@Component({
  templateUrl: "./race.crud.component.html",
  styleUrls: ["race.crud.component.scss"]
})
export class RaceCrudComponent implements OnInit {
  public championshipId: number;
  public raceId: number;

  public race: Race;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the Championship from the URL and save it locally.
    // This is used in the component HTML to link the race to the championship.
    this.route.params.subscribe(params => {
      this.championshipId = params["cId"];
    });
  }

  public onSubmit(): void {

  }
}
