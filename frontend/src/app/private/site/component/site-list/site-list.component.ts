import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  public sList: any;
  public successMsg: String = '';
  public errorMsg: String = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.listAllSites();
  }

  public listAllSites(): void {
    this.apiService.getAllSite().subscribe((res) => {
        this.sList = res.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public delete(id: string): void {
    this.apiService.deleteSite(id).subscribe((res:ApiResponse) => {
        this.successMsg = res.code;
        this.listAllSites();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = 'Ce site ne peut être supprimé car celui-ci est utilisé [CODE] = ' + error.message;
        this.listAllSites();
      });
  }
}
