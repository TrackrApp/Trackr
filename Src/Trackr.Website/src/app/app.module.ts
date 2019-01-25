import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { RaceModule } from "./race/race.module";
import { RacesModule } from "./races/races.module";
import { MaterialModule } from "./shared/material.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { SidebarModule } from "./shared/sidebar/sidebar.module";
import { StandingsModule } from "./standings/standings.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    HomeModule,
    AuthModule,
    RacesModule,
    RaceModule,
    StandingsModule,
    AboutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
