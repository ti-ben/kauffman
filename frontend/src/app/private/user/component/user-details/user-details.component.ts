import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  uDetails: any = '';
  getParamId: any = '';

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.getParamId)
    {
      this.apiService.getSingleUser(this.getParamId).subscribe(res =>
      {
        this.uDetails = res.data;
      })
    }

  }
}
