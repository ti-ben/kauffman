import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-cap',
  templateUrl: './user-cap.component.html',
  styleUrls: ['./user-cap.component.scss']
})
export class UserCapComponent implements OnInit {

  getParamId: any = this.activatedRoute.snapshot.paramMap.get('id');
  errorMsg: any = '';
  successMsg: any = '';
  periodList: any = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allPeriodList();
  }

  periodCapFormCreate = new FormGroup({
    'start_date': new FormControl(''),
    'end_date': new FormControl(''),
    'user_id': new FormControl(this.getParamId)
  });

  periodCreate() {

    if (this.periodCapFormCreate.valid) {
      //console.log('Form content: ', this.periodFormCreate.value)
      this.apiService.createPeriod(this.periodCapFormCreate.value).subscribe((res) => {
        this.periodCapFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';

    }
  }

  allPeriodList() {
    this.apiService.getAllPeriodByUserId().subscribe((res) => {
      this.periodList = res.data;
      //console.log('Period ', this.periodList)
      if (this.periodList == null) {
        //console.log('period list instance is null or undefined');
      } else {
        //console.log('period list instance is not null or undefined'); // ok now
      }
    })
  }

}
