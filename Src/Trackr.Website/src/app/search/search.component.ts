import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Championship } from "../shared/domain/championship.interface";

@Component({
  templateUrl: "./search.component.html",
  styleUrls: ["search.component.scss"]
})
export class SearchComponent implements AfterViewInit {
  @ViewChild("search") private searchElRef: ElementRef;

  public searchResults: Championship[];

  constructor() {
    this.searchResults = [
      {
        id: 1,
        name: "OTKC",
        races: [
          {
            id: 1,
            name: "Grote Prijs van Duiven",
            location: "Kartbaan Duiven",
            sessions: [],
            dateFrom: new Date(2018, 11, 25)
          }
        ]
      },
      {
        id: 2,
        name: "F4 NEC"
      }
    ];
  }

  public ngAfterViewInit(): void {
    this.searchElRef.nativeElement.focus();
  }
}
