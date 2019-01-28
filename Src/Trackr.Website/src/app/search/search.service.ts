import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Injectable()
export class SearchService {
  // private baseUrl = "https://localhost:44343/championship/v1/find?query=";
  private baseUrl = "https://ws20trackr-api-o.azurewebsites.net/championship/v1/find?query=";

  constructor(private httpClient: HttpClient) { }

  /**
   * Search for a Championship.
   *
   * @param terms The terms to search for.
   */
  public search(terms: Observable<string>) {
    // Wait 400ms, check wether the current value is differen then the last one.
    // If the conditions above are met, start searching.
    return terms
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(term => this.searchChampionships(term)));
  }

  private searchChampionships(term: string) {
    // Call the API to search for Championships.
    return this.httpClient.get(this.baseUrl + term);
  }
}
