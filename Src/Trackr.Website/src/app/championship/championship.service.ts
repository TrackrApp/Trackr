import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SessionType } from "../shared/domain/sessionType.interface";
import { ChampionshipOverview } from "./domain/championshipOverview.interface";

@Injectable()
export class ChampionshipService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Championship overview information.s
   *
   * @param id The id of the Championship.
   */
  public getChampionship(id: number): ChampionshipOverview {
    return {
      id: 1,
      name: "OTKC",
      description: "De officiele TimTim Kart Cup.",
      standings: [
        {
          position: 1,
          name: "Arjan",
          points: 43,
          changes: ""
        },
        {
          position: 2,
          name: "Youp",
          points: 43,
          changes: ""
        },
        {
          position: 3,
          name: "Wilbert",
          points: 25,
          changes: ""
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
}
