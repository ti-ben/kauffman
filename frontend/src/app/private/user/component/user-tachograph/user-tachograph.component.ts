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

  tachoList: any = '';
  errorMsg: string = '';
  tachoFormGroup!: FormGroup;
  successMsg: string = '';
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tachoInitForm();
  }

  private tachoInitForm(): void {
    this.tachoFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      num_carte: new FormControl('', Validators.required),
      description: new FormControl(''),
      user_id: new FormControl(this.getParamId)
    });
  }

  create() {
    if (this.tachoFormGroup.valid) {
      this.apiService.createTacho(this.tachoFormGroup.value).subscribe((res: ApiResponse) => {
        this.tachoInitForm();
        this.successMsg = res.code;
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

}
