import { Component } from "@angular/core";
import { AppVersionService } from "../version/version.service";
import { MenuItems } from "./menuItems";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  public version: string = this.appVersionService.getVersion();

  constructor(
    public menu: MenuItems,
    private appVersionService: AppVersionService) { }
}


