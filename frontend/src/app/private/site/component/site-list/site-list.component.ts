import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  sList: any;
  successMsg:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listAllSites();
  }

  delete(id:string)
  {
    this.apiService.deleteSite(id).subscribe((res)=> {
      this.successMsg = res.code;
      this.listAllSites();
    })
  }

  listAllSites()
  {
    this.apiService.getAllSite().subscribe((res)=> {
      this.sList = res.data;
    })
  }

}
