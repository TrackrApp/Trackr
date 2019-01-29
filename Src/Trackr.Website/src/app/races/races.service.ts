import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Race } from "../shared/domain/race.interface";

@Injectable()
export class RacesService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all the Events for a given Championship.
   *
   * @param id The id of the Championship.
   */
  public getRaces(championshipId: number): Promise<Race[]> {
    return this.httpClient.get<Race[]>("event/v1/championship/" + championshipId).toPromise();
  }
}
