import {Component, OnInit} from '@angular/core';
import {Rank} from "../../model/rank";
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit {

  public successMsg: String = '';
  public errorMsg: String = '';
  public rankList: Rank[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.listAllRank();
  }

  public listAllRank(): void {
    this.apiService.getAllRank().subscribe((response: ApiResponse) => {
        this.rankList = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public delete(id: string): void {
    this.apiService.deleteRank(id).subscribe((response: ApiResponse) => {
      this.successMsg = 'Le rang a bien été supprimé ! [CODE] = ' + response.code;
      this.listAllRank();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = 'Ce rang ne peut être supprimé car celui-ci est utilisé [CODE] = ' + error.message;
        this.listAllRank();
      });
  }
}
