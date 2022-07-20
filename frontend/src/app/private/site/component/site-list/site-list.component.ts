import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  readData: any;
  successMsg:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  delete(id:any)
  {
    this.apiService.deleteSite(id).subscribe((res)=> {
      this.successMsg = res.code;
      this.getAllData();
    })
  }

  getAllData()
  {
    this.apiService.getAllSite().subscribe((res)=> {
      this.readData = res.data;
    })
  }

}
