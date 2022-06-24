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
          { menuTitle:'Site', url:'site', menuIcon: 'fa fa-cubes' },
          { menuTitle:'User', url:'user', menuIcon: 'fa fa-users' },
          { menuTitle:'Immatriculation', url:'numberplate', menuIcon: 'fa fa-cubes' }
        ]
      }
    ]
}
