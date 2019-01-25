import { Component } from "@angular/core";
import { MenuItems } from "./menuItems";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  constructor(public menu: MenuItems) { }

}


