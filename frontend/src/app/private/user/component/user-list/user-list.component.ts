import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  readData: any;
  successMsg:any;
  errorMsg: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  delete(id:any)
  {
    this.apiService.deleteUser(id).subscribe((res)=> {
      console.log('to delete :', res.code);
      this.successMsg = res.code;
      this.getAllData();
    })
  }

  getAllData()
  {
    this.apiService.getAllUser().subscribe((res)=> {
      console.log("res :", res);
      this.readData = res.data;
    })
  }

}
