import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { Championship } from "../shared/domain/championship.interface";
import { SearchService } from "./search.service";

@Component({
  templateUrl: "./search.component.html",
  styleUrls: ["search.component.scss"]
})
export class SearchComponent implements AfterViewInit {
  @ViewChild("search") private searchElRef: ElementRef;

  public searchTerm = new Subject<string>();
  public searchResults: Championship[];

  constructor(private seachService: SearchService) {

    // Once the subject seachTerm changes, automatically search for results using the SearchService.
    this.seachService.search(this.searchTerm)
      .subscribe((results: Championship[]) => {
        console.log(results);
        // Set the results locally, so the UI will be updated after data is received.
        this.searchResults = results;
      });
  }

  public ngAfterViewInit(): void {
    this.searchElRef.nativeElement.focus();
  }
}
