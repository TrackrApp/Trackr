import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    MatCardModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
