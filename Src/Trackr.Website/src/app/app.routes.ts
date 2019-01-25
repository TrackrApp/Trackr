import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { RaceComponent } from "./race/race.component";
import { RacesComponent } from "./races/races.component";
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
  {
    path: "championship",
    children: [
      {
        path: "find",
        component: NotFoundComponent
      }
    ]
  },
  {
    path: "championship/:id",
    children: [
      {
        path: "races",
        component: RacesComponent
      },
      {
        path: "race/:id",
        component: RaceComponent
      },
      {
        path: "standings",
        component: StandingsComponent
      }
    ]
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent
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
