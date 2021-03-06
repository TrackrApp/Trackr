import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { StandingsService } from "./standing.service";
import { StandingsComponent } from "./standings.component";

@NgModule({
  declarations: [
    StandingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    StandingsService
  ],
  bootstrap: [StandingsComponent]
})
export class StandingsModule { }
