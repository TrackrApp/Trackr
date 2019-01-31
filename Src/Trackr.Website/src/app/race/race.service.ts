import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Race } from "../shared/domain/race.interface";

@Injectable()
export class RaceService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get a Race event.
   *
   * @param id The id of the race.
   */
  public getRace(id: number): Promise<Race> {
    return this.httpClient.get<Race>("event/v1/" + id).toPromise();
  }
}
