import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
