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
    this.getAllTachoByUserId();
  }

  private tachoInitForm(): void {
    this.tachoFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      num_carte: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  create() {
    if (this.tachoFormGroup.valid) {
      this.tachoFormGroup.value.user = {user_id: this.getParamId}
      this.apiService.createTacho(this.tachoFormGroup.value).subscribe((res: ApiResponse) => {
        this.tachoInitForm();
        this.getAllTachoByUserId();
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
    this.apiService.deleteTacho(id).subscribe((res: ApiResponse)=> {
      this.successMsg = res.code;
      this.getAllTachoByUserId();
    })
  }

  getAllTachoByUserId(){
    this.apiService.getAlltachoByUserId(this.getParamId).subscribe((response: ApiResponse) => {
      this.tachoList = response.data;
    });
  }

}
