import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-adr',
  templateUrl: './user-adr.component.html',
  styleUrls: ['./user-adr.component.scss']
})
export class UserAdrComponent implements OnInit {

  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  errorMsg:   any = '';
  successMsg: any = '';
  periodList: any = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  adrFormCreate = new FormGroup({
    'start_date': new FormControl(this.currentDate),
    'end_date': new FormControl(this.currentDate),
    'type': new FormControl(''),
    'user_id': new FormControl(this.getParamId)
  });

}
