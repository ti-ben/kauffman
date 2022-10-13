import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vehicule-metrology',
  templateUrl: './vehicule-metrology.component.html',
  styleUrls: ['./vehicule-metrology.component.scss']
})
export class VehiculeMetrologyComponent implements OnInit {

  providersList: any;
  metrologyList: any;
  errorMsg: string = '';
  formGroup!: FormGroup;
  successMsg: string = '';
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProvidersList();
    this.getMetrologyList();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl('', [Validators.pattern("^[0-9]*$")]),
      description: new FormControl(),
      provider_id: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create() {
    if (this.formGroup.valid) {
      this.formGroup.value.vehicule = {vehicule_id: this.getParamId}
      this.formGroup.value.provider = {provider_id: this.formGroup.value.provider_id}
      this.apiService.createMetrology(this.formGroup.value).subscribe((response: ApiResponse) => {
        this.successMsg = response.code;
        this.initForm();
        this.getMetrologyList();
      })
    }
  }

  update(id: string) {
    alert('update id = ' + id)
    console.log(this.formGroup.value);
  }

  delete(id: string) {
    this.apiService.deleteMetrology(id).subscribe((response: ApiResponse) => {
        this.successMsg = response.code
        this.getMetrologyList();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = 'Cette ligne ne peut être supprimée. [CODE] = ' + error.message;
        this.getMetrologyList();
      });
  }

  getProvidersList() {
    this.apiService.getAllProviders().subscribe((response: ApiResponse) => {
      this.providersList = response.data;
    })
  }

  getMetrologyList() {
    this.apiService.getAllMetrologyByVehiculeId(this.getParamId).subscribe((response: ApiResponse) => {
      this.metrologyList = response.data;
    })
  }

}
