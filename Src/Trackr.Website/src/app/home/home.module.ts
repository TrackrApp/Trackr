import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
