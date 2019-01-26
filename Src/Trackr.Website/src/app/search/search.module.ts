import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
