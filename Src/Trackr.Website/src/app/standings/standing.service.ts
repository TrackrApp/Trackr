import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Standing } from "../shared/domain/standing.interface";

@Injectable()
export class StandingsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Standings for the given Championship id.
   *
   * @param id The id of the Championship.
   */
  public getStandings(id: number): Promise<Standing[]> {
    return this.httpClient.get<Standing[]>("standings/v1/championship/" + id).toPromise();
  }
}
