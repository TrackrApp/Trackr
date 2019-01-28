import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatTableModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { ChampionshipComponent } from "./championship.component";

@NgModule({
  declarations: [
    ChampionshipComponent,
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [ChampionshipComponent]
})
export class ChampionshipModule { }
