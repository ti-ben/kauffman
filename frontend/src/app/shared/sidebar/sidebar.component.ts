import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../services/sidebar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems?: any[];

  constructor(private sideBarServices: SidebarService, private router: Router) {
    this.menuItems = this.sideBarServices.menu;
  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/login')
  }

}
