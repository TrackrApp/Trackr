import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ChampionshipComponent } from "./championship/championship.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { RaceComponent } from "./race/race.component";
import { RacesComponent } from "./races/races.component";
import { SearchComponent } from "./search/search.component";
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
        component: RacesComponent
      },
      {
        path: "race/:rId",
        component: RaceComponent
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
