import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Menu } from "./menu";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatListModule
  ],
  providers: [,
    Menu
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
