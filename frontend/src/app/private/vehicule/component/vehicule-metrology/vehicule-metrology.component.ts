import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

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
    this.initForm();
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
    this.formGroup.value.vehicule_id = {vehicule_id: this.getParamId}
    this.formGroup.value.provider_id = {provider_id: this.formGroup.value.provider_id}
    console.log(this.formGroup.value);
  }

  update(id: string) {
    alert('update id = ' + id)
    console.log(this.formGroup.value);
  }

  delete(id: string) {
    alert('delete id = ' + id)
    console.log(this.formGroup.value);
  }

  getProvidersList() {
    this.apiService.getAllProviders().subscribe((response: ApiResponse) => {
      this.providersList = response.data;
    })
  }

}
