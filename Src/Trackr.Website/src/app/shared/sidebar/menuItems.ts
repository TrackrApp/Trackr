import { Injectable } from "@angular/core";

export interface MenuItem {
  name: string;
  type: string;
  icon: string;
  url: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    type: "",
    icon: "home",
    url: "home"
  },
  {
    name: "Dashboard",
    type: "sub",
    icon: "columns",
    url: "dashboard",
    children: [
      {
        name: "Overview",
        type: "",
        icon: "",
        url: "championships"
      }
    ]
  },
  {
    name: "Search",
    type: "",
    icon: "search",
    url: "search",
  },
  {
    name: "Championship",
    type: "sub",
    icon: "trophy",
    url: "championship",
    children: [
      {
        name: "Races",
        type: "id",
        icon: "",
        url: "races"
      },
      {
        name: "Standings",
        type: "id",
        icon: "",
        url: "standings"
      }
    ]
  },
  {
    name: "About",
    type: "",
    icon: "info-circle",
    url: "about"
  }
];

@Injectable()
export class MenuItems {
  getItems(): MenuItem[] {
    return menuItems;
  }
}
