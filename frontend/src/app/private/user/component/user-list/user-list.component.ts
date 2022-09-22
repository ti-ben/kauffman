import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  readData: any;
  search?: string;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  delete(id: string) {
    this.apiService.deleteUser(id).subscribe((res: ApiResponse) => {
      this.successMsg = res.code;
      this.getAllData();
    })
  }

  getAllData() {
    this.apiService.getAllUser().subscribe((res: ApiResponse) => {
      this.readData = res.data;
    })
  }

}
