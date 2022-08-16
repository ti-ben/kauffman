import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-user-tachograph',
  templateUrl: './user-tachograph.component.html',
  styleUrls: ['./user-tachograph.component.scss']
})
export class UserTachographComponent implements OnInit {

  errorMsg: string = '';
  successMsg: string = '';
  formGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
  }


  private initForm(): void {
    this.formGroup = new FormGroup({
      'start_date': new FormControl(this.currentDate, Validators.required),
      'end_date': new FormControl(this.currentDate, Validators.required),
      'num_carte': new FormControl('', Validators.required),
      'description': new FormControl(''),
      'user_id': new FormControl(this.getParamId)
    });

  }

  tachographCreate() {
    console.log('Form data = ', this.formGroup.value)
    if (this.formGroup.valid) {
      this.apiService.createTacho(this.formGroup.value).subscribe((res: ApiResponse) => {
        this.formGroup.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

}
