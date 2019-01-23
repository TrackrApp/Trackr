import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { HomeModule } from "./home/home.module";
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
    StandingsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }