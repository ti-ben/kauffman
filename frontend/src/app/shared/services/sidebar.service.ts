import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() {
  }

  menu: any[] =
    [
      {
        menuTitle: 'Dashboard',
        menuIcon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {menuTitle: 'Statistiques', url: 'statistics', menuIcon: 'fa fa-arrow-right'}
        ]
      },
      {
        menuTitle: 'Management',
        menuIcon: 'nav-icon fa fa-users',
        submenu: [
          {menuTitle: 'Employés', url: 'user', menuIcon: 'fa fa-arrow-right'}
        ]
      },
      {
        menuTitle: 'Fleet',
        menuIcon: 'nav-icon fa fa-truck',
        submenu: [
          {menuTitle: 'Véhicules', url: 'vehicule', menuIcon: 'fa fa-arrow-right'},
          {menuTitle: 'Immatriculations', url: 'numberplate', menuIcon: 'fa fa-arrow-right'}
        ]
      },
      {
        menuTitle: 'Settings',
        menuIcon: 'nav-icon fa fa-screwdriver-wrench',
        submenu: [
          {menuTitle: 'Prestataires', url: 'provider', menuIcon: 'fa fa-arrow-right'},
          {menuTitle: 'Rangs', url: 'rank', menuIcon: 'fa fa-arrow-right'},
          {menuTitle: 'Statuts', url: 'status', menuIcon: 'fa fa-arrow-right'},
          {menuTitle: 'Sites', url: 'site', menuIcon: 'fa fa-arrow-right'},
        ]
      }
    ]
}
