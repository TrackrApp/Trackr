import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { SessionComponent } from "./session.component";
import { SessionService } from "./session.service";

@NgModule({
  declarations: [
    SessionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    SessionService
  ],
  bootstrap: [SessionComponent]
})
export class SessionModule { }
