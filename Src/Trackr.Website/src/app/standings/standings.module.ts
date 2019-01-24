import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material";
import { StandingsComponent } from "./standings.component";

@NgModule({
  declarations: [
    StandingsComponent,
  ],
  imports: [
    MatTableModule
  ],
  providers: [],
  bootstrap: [StandingsComponent]
})
export class StandingsModule { }
