import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { RaceComponent } from "./race.component";

@NgModule({
  declarations: [
    RaceComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [RaceComponent]
})
export class RaceModule { }
