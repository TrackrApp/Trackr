import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatTableModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { ChampionshipComponent } from "./championship.component";
import { ChampionshipService } from "./championship.service";

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
  providers: [ChampionshipService],
  bootstrap: [ChampionshipComponent]
})
export class ChampionshipModule { }
