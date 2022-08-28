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
    this.getAllAdr();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      date_rdv: new FormControl(this.currentDate, Validators.required),
      category: new FormControl(),
      description: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create() {
    alert('create');
  }

  update(id: string) {
    alert('update');
  }

  delete(id: string) {
    alert('delete');
  }

  getAllAdr() {
    this.apiService.getAllAdrByVehiculeId(this.getParamId).subscribe((response: ApiResponse) => {
      this.adrList = response.data;
    })
  }
}
