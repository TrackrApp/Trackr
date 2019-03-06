import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ChampionshipComponent } from "./championship/championship.component";
import { RaceCrudComponent } from "./crud/race/race.crud.component";
import { HomeComponent } from "./home/home.component";
import { RaceComponent } from "./race/race.component";
import { RacesComponent } from "./races/races.component";
import { SearchComponent } from "./search/search.component";
import { SessionComponent } from "./session/session.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { StandingsComponent } from "./standings/standings.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  // {
  //   path: "dashboard",
  //   component: DashboardComponent
  // },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "championship/:cId",
    children: [
      {
        path: "overview",
        component: ChampionshipComponent
      },
      {
        path: "races",
        children: [
          {
            path: "",
            component: RacesComponent
          },
          {
            path: "add",
            component: RaceCrudComponent
          }
        ]
      },
      {
        path: "race/:rId",
        children: [
          {
            path: "",
            component: RaceComponent
          },
          {
            path: "session/:sId",
            component: SessionComponent
          }
        ]
      },
      {
        path: "standings",
        component: StandingsComponent
      }
    ]
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
