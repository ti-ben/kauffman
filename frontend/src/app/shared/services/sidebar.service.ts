import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu:any[]=
    [
      {
        menuTitle:'Dashboard',
        menuIcon: 'nav-icon fas fa-tachometer-alt',
        submenu:[
          { menuTitle:'Sites', url:'site', menuIcon: 'fa fa-cubes' },
          { menuTitle:'Employés', url:'user', menuIcon: 'fa fa-users' },
          { menuTitle:'Prestataires', url:'provider', menuIcon: 'fa fa-cubes' },
          { menuTitle:'Immatriculations', url:'numberplate', menuIcon: 'fa fa-cubes' },
          { menuTitle:'Status', url:'status', menuIcon: 'fa fa-cubes' },
          { menuTitle:'Véhicules', url:'vehicule', menuIcon: 'fa fa-truck' }
        ]
      }
    ]
}
