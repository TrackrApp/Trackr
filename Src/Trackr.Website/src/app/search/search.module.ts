import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { SpinnerComponent } from "../shared/spinner/spinner.component";
import { SearchComponent } from "./search.component";
import { SearchService } from "./search.service";

@NgModule({
  declarations: [
    SpinnerComponent,
    SearchComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    SearchService
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
