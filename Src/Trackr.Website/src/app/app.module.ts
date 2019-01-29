import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { AuthModule } from "./auth/auth.module";
import { ChampionshipModule } from "./championship/championship.module";
import { HomeModule } from "./home/home.module";
import { RaceModule } from "./race/race.module";
import { RacesModule } from "./races/races.module";
import { SearchModule } from "./search/search.module";
import { ApiEndpointPrefixer } from "./shared/api-endpoint-prefixer/api-endpoint-prefixer.service";
import { HeaderComponent } from "./shared/header/header.component";
import { MaterialModule } from "./shared/material.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { SharedModule } from "./shared/shared.module";
import { SidebarModule } from "./shared/sidebar/sidebar.module";
import { StandingsModule } from "./standings/standings.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    HomeModule,
    SearchModule,
    AuthModule,
    ChampionshipModule,
    RacesModule,
    RaceModule,
    StandingsModule,
    AboutModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: ApiEndpointPrefixer,
      multi: true
    }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
