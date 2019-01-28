import { NgModule } from "@angular/core";
import { MatCardModule, MatTableModule } from "@angular/material";
import { StandingsComponent } from "./standings.component";

@NgModule({
  declarations: [
    StandingsComponent,
  ],
  imports: [
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [StandingsComponent]
})
export class StandingsModule { }
