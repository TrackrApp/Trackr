import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RacesComponent } from "./races.component";

@NgModule({
  declarations: [
    RacesComponent,
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [RacesComponent]
})
export class RacesModule { }
