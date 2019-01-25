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
    name: "Championship",
    type: "sub",
    icon: "trophy",
    url: "championship",
    children: [
      {
        name: "Find",
        type: "",
        icon: "",
        url: "find"
      },
      {
        name: "Races",
        type: "",
        icon: "",
        url: "races"
      },
      {
        name: "Standings",
        type: "",
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
