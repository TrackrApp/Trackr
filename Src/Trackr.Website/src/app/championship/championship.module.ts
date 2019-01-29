import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { ChampionshipComponent } from "./championship.component";
import { ChampionshipService } from "./championship.service";

@NgModule({
  declarations: [
    ChampionshipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ChampionshipService],
  bootstrap: [ChampionshipComponent]
})
export class ChampionshipModule { }
