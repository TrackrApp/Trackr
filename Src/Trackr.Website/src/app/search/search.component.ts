import { Component } from "@angular/core";
import { pipe, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Championship } from "../shared/domain/championship.interface";
import { SearchService } from "./search.service";

@Component({
  templateUrl: "./search.component.html",
  styleUrls: ["search.component.scss"]
})
export class SearchComponent {
  public searchTerm = new Subject<string>();
  public searchResults: Championship[];

  public isSearching: boolean;

  constructor(private searchService: SearchService) {

    // Subscribe to the searchTerm. If the value changes, set isSearching to true.
    // The UI will react on this and show a spinner, indicating the search job is in progress.
    this.searchTerm.pipe(debounceTime(200)).subscribe(() => {
      this.isSearching = true;
    });

    // Once the subject seachTerm changes, automatically search for results using the SearchService.
    this.searchService.search(this.searchTerm)
      .subscribe((results: Championship[]) => {
        console.log(results);
        // Set the results locally, so the UI will be updated after data is received.
        this.searchResults = results;

        // Reset the variable, so the spinner will be hidden.
        this.isSearching = false;
      });
  }
}
