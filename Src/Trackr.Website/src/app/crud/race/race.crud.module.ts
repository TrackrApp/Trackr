import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MaterialModule } from "src/app/shared/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RaceCrudComponent } from "./race.crud.component";

@NgModule({
  declarations: [
    RaceCrudComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialFileInputModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [RaceCrudComponent]
})
export class RaceCrudModule { }
