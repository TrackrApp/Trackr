import { Component, OnInit } from "@angular/core";
import { Stats } from "../shared/stats/domain/stats.interface";
import { StatsService } from "../shared/stats/stats.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {
  public stats: Stats;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getStats()
      .then((result: Stats) => {
        this.stats = result;
      });
  }
}
