import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {Status} from "../../model/status";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {

  public successMsg: String = '';
  public errorMsg: String = '';
  public listStatus: Status[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.listAllStatus();
  }

  public listAllStatus(): void {
    this.apiService.getAllStatus().subscribe((response: ApiResponse) => {
      this.listStatus = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public delete(id: string): void {

  }
}
