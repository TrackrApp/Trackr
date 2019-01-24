import { Component } from "@angular/core";
import { Race } from "../shared/domain/race.interface";
import { SessionType } from "../shared/domain/sessionType.interface";

@Component({
  templateUrl: "./race.component.html",
  styleUrls: ["race.component.scss"]
})
export class RaceComponent {
  public race: Race;

  constructor() {
    this.race = {
      name: "Grote prijs van Duiven",
      location: "Duiven",
      url: "https://www.kartbaanduiven.nl",
      sessions: [
        {
          name: "Kwalificatie",
          sessionType: SessionType.Qualification,
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
            },
          ]
        },
        {
          name: "Training",
          sessionType: SessionType.Training,
          results: [
            {
              position: 1,
              driver: "Youp",
              time: "43.41",
              difference: "",
              laps: 5,
            }
          ]
        },
      ]
    };
  }
}
