import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Stats } from "./domain/stats.interface";

@Injectable()
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the stats.
   */
  public getStats(): Promise<Stats> {
    return this.httpClient.get<Stats>("stats/v1").toPromise();
  }
}
