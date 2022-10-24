import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ApiResponse} from "../../../../shared/model";
import {Site} from "../../model/site";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  siteList$: Site[]= [];
  successMsg: String = '';
  errorMsg: String = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.listAllSites();
  }

  public listAllSites(): void {
    this.apiService.getAllSite().subscribe((res) => {
        this.siteList$ = res.data;
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
