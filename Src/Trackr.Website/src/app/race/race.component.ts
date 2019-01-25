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
      id: 1,
      name: "Grote prijs van Duiven",
      location: "Kartbaan Duiven",
      url: "https://www.kartbaanduiven.nl",
      dateFrom: new Date(2018, 11, 28),
      sessions: [
        {
          id: 3,
          name: "Race",
          sessionType: SessionType.Race,
          startTime: new Date(2018, 11, 28, 19, 36, 0),
          results: []
        },
        {
          id: 2,
          name: "Qualification",
          sessionType: SessionType.Qualification,
          startTime: new Date(2018, 11, 28, 19, 0, 0),
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
          id: 1,
          name: "Training",
          sessionType: SessionType.Training,
          startTime: new Date(2018, 11, 28, 18, 29, 0),
          results: [
            {
              position: 1,
              driver: "Youp",
              time: "43.41",
              difference: "",
              laps: 5,
            },
            {
              position: 2,
              driver: "Arjan",
              time: "45.59",
              difference: "+2.18",
              laps: 5,
            },
          ]
        },
      ]
    };
  }
}
