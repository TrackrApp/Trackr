import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { RaceComponent } from "./race.component";

@NgModule({
  declarations: [
    RaceComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [RaceComponent]
})
export class RaceModule { }
