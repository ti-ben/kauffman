import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-vehicule-ctrltech',
  templateUrl: './vehicule-ctrltech.component.html',
  styleUrls: ['./vehicule-ctrltech.component.scss']
})
export class VehiculeCtrltechComponent implements OnInit {

  ctrltechFormGroup!: FormGroup;
  ctrltechList: any;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllCtrltechFromCurrentVehicule();
  }

  initForm(){
    this.ctrltechFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(),
      description: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  createCtrltech(){

  }

  getAllCtrltechFromCurrentVehicule(){
    this.apiService.getAllCtrltechByVehiculeId(this.getParamId).subscribe((response: ApiResponse) =>{
      this.ctrltechList = response.data;
      console.log('ctrltechList => ', this.ctrltechList);
    })
  }
}
