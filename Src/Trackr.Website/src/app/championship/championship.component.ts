import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ChampionshipOverview } from "../shared/domain/championshipOverview.interface";
import { SessionType } from "../shared/domain/sessionType.interface";

@Component({
  templateUrl: "./championship.component.html",
  styleUrls: ["championship.component.scss"]
})
export class ChampionshipComponent implements OnInit {
  public championshipId: number;
  public championship: ChampionshipOverview;

  public raceColumns = ["position", "name", "time", "laps"];
  public standingColumns = ["position", "name", "points"];

  constructor(private route: ActivatedRoute) {
    this.championship = {
      id: 1,
      name: "OTKC",
      description: "De officiele TimTim Kart Cup.",
      standings: [
        {
          position: 1,
          driver: "Arjan",
          difference: "43",
          laps: 0,
          time: "",
        },
        {
          position: 2,
          driver: "Youp",
          difference: "43",
          laps: 0,
          time: "",
        },
        {
          position: 3,
          driver: "Wilbert",
          difference: "25",
          laps: 0,
          time: "",
        },
      ],
      lastRaceResult: {
        id: 8,
        name: "Race",
        sessionType: SessionType.Race,
        startTime: new Date(2018, 11, 24, 19, 0, 0),
        results: [
          {
            position: 1,
            driver: "Arjan",
            time: "43.09",
            difference: "",
            laps: 12
          },
          {
            position: 2,
            driver: "Youp",
            time: "43.23",
            difference: "+0.14",
            laps: 12
          },
          {
            position: 3,
            driver: "Wilbert",
            time: "44.60",
            difference: "+1.51",
            laps: 11
          }
        ]
      }
    };
  }

  ngOnInit() {
    // Get the Championship ID from the URL and save it locally.
    // This is used in the component HTML to link to Sessions.
    this.route.params.subscribe(params => {
      this.championshipId = params["cId"];
    });
  }
}
