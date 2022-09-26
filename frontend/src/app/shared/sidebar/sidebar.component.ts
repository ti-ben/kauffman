import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../services/sidebar.service";
import {Router} from "@angular/router";
import {AuthService} from "../../security/service/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems?: any[];

  constructor(private sideBarServices: SidebarService, private router: Router, private authService: AuthService) {
    this.menuItems = this.sideBarServices.menu;
  }

  ngOnInit(): void {
  }

  logout() {
   this.authService.logout();
  }

}
