import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vehicule-ctrltech',
  templateUrl: './vehicule-ctrltech.component.html',
  styleUrls: ['./vehicule-ctrltech.component.scss']
})
export class VehiculeCtrltechComponent implements OnInit {

  ctrltechList: any;
  providersList: any;
  errorMsg: string = '';
  successMsg: string = '';
  formGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllCtrltechFromCurrentVehicule();
    this.getProvidersList();
  }

  initForm() {
    this.formGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(),
      description: new FormControl(),
      provider_id: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create() {
    this.apiService.createCtrltech(this.formGroup.value).subscribe((response: ApiResponse) => {
      console.log(this.formGroup)
      this.formGroup.reset();
      this.successMsg = response.code;
      this.getAllCtrltechFromCurrentVehicule();
    })
  }

  update(id: string) {
    console.log(this.formGroup.value);
  }

  delete(id: string): void {
    this.apiService.deleteCtrltech(id).subscribe((res: ApiResponse) => {
        this.successMsg = res.code;
        this.getAllCtrltechFromCurrentVehicule();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = 'Ce site ne peut être supprimé car celui-ci est utilisé [CODE] = ' + error.message;
        this.getAllCtrltechFromCurrentVehicule();
      });
  }

  getAllCtrltechFromCurrentVehicule() {
    this.apiService.getAllCtrltechByVehiculeId(this.getParamId).subscribe((response: ApiResponse) => {
      this.ctrltechList = response.data;
    })
  }

  getProvidersList() {
    this.apiService.getAllProviders().subscribe((response: ApiResponse) => {
      this.providersList = response.data;
    })
  }
}
