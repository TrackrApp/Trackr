import { Injectable } from "@angular/core";

export interface MenuItem {
  name: string;
  type: string;
  icon: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    type: "/",
    icon: "home",
    url: ""
  },
  {
    name: "Races",
    type: "",
    icon: "flag",
    url: "races"
  },
  {
    name: "Standings",
    type: "",
    icon: "trophy",
    url: "standings"
  },
];

@Injectable()
export class Menu {
  getItems(): MenuItem[] {
    return menuItems;
  }
}
