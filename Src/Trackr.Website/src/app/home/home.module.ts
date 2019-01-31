import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { StatsService } from "../shared/stats/stats.service";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [StatsService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
