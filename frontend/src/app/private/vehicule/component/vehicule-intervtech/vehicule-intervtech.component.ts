import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vehicule-intervtech',
  templateUrl: './vehicule-intervtech.component.html',
  styleUrls: ['./vehicule-intervtech.component.scss']
})
export class VehiculeIntervtechComponent implements OnInit {

  intervtechFormGroup!: FormGroup;
  intervtechList: any;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.intervtechFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(),
      description: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create(){
    console.log(this.intervtechFormGroup.value);
  }

  delete(id:string){
    console.log(this.intervtechFormGroup.value);
  }

  update(id:string){
    console.log(this.intervtechFormGroup.value);
  }

}
