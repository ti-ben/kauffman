import { Component, OnInit } from '@angular/core';
import {ApiResponse} from "../../../../shared/model";
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {

  pList: any;
  successMsg:string = '';
  errorMsg: string = '';

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listAllProviders();
  }

  listAllProviders()
  {
    this.apiService.getAllProviders().subscribe((response: ApiResponse)=> {
      this.pList = response.data;
    })
  }

  delete(id:string)
  {
    this.apiService.deleteProvider(id).subscribe((res)=> {
      this.successMsg = res.code;
      this.listAllProviders();
    })
  }


}
