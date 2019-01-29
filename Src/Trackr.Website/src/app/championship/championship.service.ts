import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChampionshipOverview } from "./domain/championshipOverview.interface";

@Injectable()
export class ChampionshipService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Championship overview information.
   *
   * @param id The id of the Championship.
   */
  public getChampionship(id: number): Promise<ChampionshipOverview> {
    return this.httpClient.get<ChampionshipOverview>("championship/v1/" + id).toPromise();
  }
}
