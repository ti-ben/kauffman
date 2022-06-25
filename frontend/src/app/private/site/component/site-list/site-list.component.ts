import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {Observable} from "rxjs";

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
    console.log('to delete :', id);
    this.apiService.deleteSite(id).subscribe((res)=> {
      console.log('to delete :', res.code);
      this.successMsg = res.code;
      this.getAllData();
    })
  }

  getAllData()
  {
    this.apiService.getAllSite().subscribe((res)=> {
      console.log("res :", res);
      this.readData = res.data;
    })
  }

}
