import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from "./search.component";
import { SearchService } from "./search.service";

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
    SearchService
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
