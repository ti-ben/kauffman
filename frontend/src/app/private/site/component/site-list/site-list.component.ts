import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  public sList: any;
  public successMsg: String = '';
  public errorMsg: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.listAllSites();
  }

  delete(id: string) {
    this.apiService.deleteSite(id).subscribe((res) => {
        this.successMsg = res.code;
        this.listAllSites();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.listAllSites();
      }
    );
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

}
