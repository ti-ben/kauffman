import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vehicule-intervtech',
  templateUrl: './vehicule-intervtech.component.html',
  styleUrls: ['./vehicule-intervtech.component.scss']
})
export class VehiculeIntervtechComponent implements OnInit {

  providersList: any;
  intervtechList: any;
  errorMsg: string = '';
  successMsg: string = '';
  intervtechFormGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProvidersList();
    this.getIntervtech();
    this.initForm();
  }

  initForm() {
    this.intervtechFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(),
      description: new FormControl(),
      provider_id: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create() {
    if (this.intervtechFormGroup.valid) {
      this.intervtechFormGroup.value.vehicule = {vehicule_id: this.getParamId}
      this.intervtechFormGroup.value.provider = {provider_id: this.intervtechFormGroup.value.provider_id}
      this.apiService.createIntervtech(this.intervtechFormGroup.value).subscribe((response: ApiResponse) => {
        this.successMsg = response.code;
        this.initForm();
        this.getIntervtech();
      });
    }
  }

  update(id: string) {
    alert('update id = ' + id)
    console.log(this.intervtechFormGroup.value);
  }

  delete(id: string) {
    this.apiService.deleteIntervtech(id).subscribe((response: ApiResponse) => {
      this.successMsg = response.code
      this.getIntervtech()
    },
      (error: HttpErrorResponse) => {
        this.errorMsg = 'Cette ligne ne peut être supprimée. [CODE] = ' + error.message;
        this.getIntervtech()
      });
  }

  getIntervtech() {
    this.apiService.getAllIntervtechByVehiculeId(this.getParamId).subscribe((response: ApiResponse) => {
      this.intervtechList = response.data;
    })
  }

  getProvidersList() {
    this.apiService.getAllProviders().subscribe((response: ApiResponse) => {
      this.providersList = response.data;
    })
  }

}
