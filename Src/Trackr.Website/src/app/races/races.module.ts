import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RacesComponent } from "./races.component";
import { RacesService } from "./races.service";

@NgModule({
  declarations: [
    RacesComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [RacesService],
  bootstrap: [RacesComponent]
})
export class RacesModule { }
