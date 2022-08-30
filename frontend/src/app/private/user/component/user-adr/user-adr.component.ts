import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-user-adr',
  templateUrl: './user-adr.component.html',
  styleUrls: ['./user-adr.component.scss']
})
export class UserAdrComponent implements OnInit {

  adrList: any = '';
  errorMsg: any = '';
  successMsg: any = '';
  adrFormGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.adrInitForm();
    this.getAllAdrByUserID();
  }

  private adrInitForm(): void {
    this.adrFormGroup = new FormGroup({
      date_rdv: new FormControl(this.currentDate),
      description: new FormControl(),
      category: new FormControl(),
    });
  }

  create(){
    if (this.adrFormGroup.valid) {
      this.adrFormGroup.value.user = {user_id: this.getParamId}
      this.apiService.createAdr(this.adrFormGroup.value).subscribe((response: ApiResponse) => {
        this.adrInitForm();
        this.getAllAdrByUserID();
        this.successMsg = response.data;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update(id: string){
    alert('update');
  }

  delete(id: string){
    this.apiService.deleteAdr(id).subscribe((res: ApiResponse)=> {
      this.successMsg = res.code;
      this.getAllAdrByUserID();
    })
  }

  getAllAdrByUserID() {
    this.apiService.getAllAdrByUserId(this.getParamId).subscribe((response: ApiResponse) => {
      this.adrList = response.data;
    });
  }
}
