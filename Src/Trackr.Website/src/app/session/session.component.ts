import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Session } from "../shared/domain/session.interface";
import { SessionService } from "./session.service";

@Component({
  templateUrl: "./session.component.html",
  styleUrls: ["session.component.scss"]
})
export class SessionComponent implements OnInit {
  public championshipId: number;
  public raceId: number;
  public sessionId: number;
  public session: Session;

  public resultColumns = ["position", "driver", "difference", "laps"];

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // Get the Championship ID from the URL and save it locally.
      this.championshipId = params["cId"];
      this.raceId = params["rId"];
      this.sessionId = params["sId"];

      // Call the service to retrieve the data from the API.
      this.sessionService.getSession(this.sessionId)
        .then((result: Session) => {
          this.session = result;
          console.log(result);
        })
        .catch((err: Error) => {
          console.error(err);
        });
    });
  }
}
