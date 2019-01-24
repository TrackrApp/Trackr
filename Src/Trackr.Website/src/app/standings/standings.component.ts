import { Component } from "@angular/core";
import { Standing } from "../shared/domain/standing.interface";

@Component({
  templateUrl: "./standings.component.html",
  styleUrls: ["standings.component.scss"]
})
export class StandingsComponent {
  public standings: Standing[];

  public standingColumns = ["position", "name", "points", "changes"];

  constructor() {
    this.standings = [
      {
        position: 1,
        name: "Dick",
        points: 24,
        changes: "-"
      }
    ];
  }
}
