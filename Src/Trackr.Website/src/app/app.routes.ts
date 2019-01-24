import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { StandingsComponent } from "./standings/standings.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "championship",
    children: [
      {
        path: "races",
        component: NotFoundComponent
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
