import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-user-selectmed',
  templateUrl: './user-selectmed.component.html',
  styleUrls: ['./user-selectmed.component.scss']
})
export class UserSelectmedComponent implements OnInit {

  getParamId: any = this.activatedRoute.snapshot.paramMap.get('id');
  errorMsg: any = '';
  successMsg: any = '';
  periodList: any = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allPeriodList();
  }

  periodFormCreate = new FormGroup({
    'start_date': new FormControl(''),
    'end_date': new FormControl(''),
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
