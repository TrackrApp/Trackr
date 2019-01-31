import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RaceComponent } from "./race.component";
import { RaceService } from "./race.service";

@NgModule({
  declarations: [
    RaceComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    RaceService
  ],
  bootstrap: [RaceComponent]
})
export class RaceModule { }
