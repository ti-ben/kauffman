import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  readData: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllSite().subscribe((res)=> {
      console.log("res :", res);
      this.readData = res.data;
    })
  }

}
