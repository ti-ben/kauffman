import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-user-selectmed',
  templateUrl: './user-selectmed.component.html',
  styleUrls: ['./user-selectmed.component.scss']
})
export class UserSelectmedComponent implements OnInit {

  getParamId: any = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  errorMsg: any = '';
  successMsg: any = '';
  periodList: any = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allPeriodList();
  }

  periodFormCreate = new FormGroup({
    'start_date': new FormControl(this.currentDate, Validators.required),
    'end_date': new FormControl(this.currentDate, Validators.required),
    'user_id': new FormControl(this.getParamId)
  });

  periodCreate() {

    if (this.periodFormCreate.valid) {
      //console.log('Form content: ', this.periodFormCreate.value)
      this.apiService.createPeriod(this.periodFormCreate.value).subscribe((res: ApiResponse) => {
        this.periodFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';

    }
  }

  allPeriodList() {
    this.apiService.getAllPeriodByUserId().subscribe((res: ApiResponse) => {
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
