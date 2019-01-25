import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MenuItems } from "./menuItems";
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
    MenuItems
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
