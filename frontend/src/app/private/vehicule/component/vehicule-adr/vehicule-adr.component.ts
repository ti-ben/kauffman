import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-vehicule-adr',
  templateUrl: './vehicule-adr.component.html',
  styleUrls: ['./vehicule-adr.component.scss']
})
export class VehiculeAdrComponent implements OnInit {

  adrList: any;
  errorMsg: string = '';
  successMsg: string = '';
  formGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllAdrByUserId();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      date_rdv: new FormControl(this.currentDate, Validators.required),
      category: new FormControl(),
      description: new FormControl(),
    });
  }

  create() {
    this.formGroup.value.vehicule = {vehicule_id: this.getParamId}
    this.apiService.createAdr(this.formGroup.value).subscribe((response: ApiResponse) => {
      this.successMsg = response.code;
      this.initForm();
      this.getAllAdrByUserId();
    })
    alert('create');
  }

  update(id: string) {
    alert('update id = ' + id);
  }

  delete(id: string) {
    alert('delete id = ' + id);
  }

  getAllAdrByUserId() {
    this.apiService.getAllAdrByVehiculeId(this.getParamId).subscribe((response: ApiResponse) => {
      this.adrList = response.data;
    })
  }
}
