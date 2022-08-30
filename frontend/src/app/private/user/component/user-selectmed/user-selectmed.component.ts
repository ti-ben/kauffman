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

  errorMsg: any = '';
  successMsg: any = '';
  selectmedList: any = '';
  selectmedFormGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId: any = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectmedInitForm();
    this.getAllSelectMedByUserId();
  }

  private selectmedInitForm(): void {
    this.selectmedFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(null),
      description: new FormControl(null),
    });
  }

  create(): void {
    alert('create');
    if(this.selectmedFormGroup.valid) {
      this.selectmedFormGroup.value.user = {user_id: this.getParamId}
      this.apiService.createSelectmed(this.selectmedFormGroup.value).subscribe((response: ApiResponse) => {
        this.selectmedInitForm();
        this.successMsg = response.data;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update(id: string): void {
    alert('update');
  }

  delete(id: string): void {
    alert('delete');
  }

  getAllSelectMedByUserId() {
    this.apiService.getAllSelectmedByUserId(this.getParamId).subscribe((response: ApiResponse) => {
      this.selectmedList = response.data;
    });
  }

}
