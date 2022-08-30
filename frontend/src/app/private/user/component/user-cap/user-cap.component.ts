import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-user-cap',
  templateUrl: './user-cap.component.html',
  styleUrls: ['./user-cap.component.scss']
})
export class UserCapComponent implements OnInit {

  capList: any = '';
  errorMsg: string = '';
  successMsg: string = '';
  capFormGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.capInitForm();
    this.getAllCapByUserID();
  }

  private capInitForm(): void {
    this.capFormGroup = new FormGroup({
      user_id: new FormControl(this.getParamId),
      start_date: new FormControl(this.currentDate),
      end_date: new FormControl(this.currentDate),
      price: new FormControl(null),
      description: new FormControl(null),
      theme: new FormControl(null)
    });
  }

  create(): void {
    if (this.capFormGroup.valid) {
      this.capFormGroup.value.user = {user_id: this.getParamId}
      this.apiService.createCap(this.capFormGroup.value).subscribe((response: ApiResponse) => {
        this.capInitForm();
        this.successMsg = response.data;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update(id:string): void {
    alert('update');
  }

  delete(id: string): void {
    alert('delete');
  }

  getAllCapByUserID() {
    this.apiService.getAllCapByUserId(this.getParamId).subscribe((response: ApiResponse) => {
      this.capList = response.data;
    });
  }

}
