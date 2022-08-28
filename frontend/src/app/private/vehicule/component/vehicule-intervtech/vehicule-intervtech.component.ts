import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

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
    this.getIntervtech()
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
    console.log(this.intervtechFormGroup.value);
    this.apiService.createIntervtech(this.intervtechFormGroup.value).subscribe((response: ApiResponse) => {
      this.intervtechFormGroup.reset();
      this.successMsg = response.code;
    });
  }

  update(id: string) {
    console.log(this.intervtechFormGroup.value);
  }

  delete(id: string) {
    alert(id);
    console.log(this.intervtechFormGroup.value);
  }

  getIntervtech(){
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
