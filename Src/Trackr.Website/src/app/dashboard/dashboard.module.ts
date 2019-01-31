import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { StatsService } from "../shared/stats/stats.service";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [StatsService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
