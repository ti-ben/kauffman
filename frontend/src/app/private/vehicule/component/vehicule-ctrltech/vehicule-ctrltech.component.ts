import {Component, Input, OnInit, Provider, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {BehaviorSubject} from "rxjs";
import {switchMap} from "rxjs/operators";

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
  ctrltechFormGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllCtrltechFromCurrentVehicule();
    this.getProvidersList();
  }

  initForm(){
    this.ctrltechFormGroup = new FormGroup({
      start_date: new FormControl(this.currentDate, Validators.required),
      end_date: new FormControl(this.currentDate, Validators.required),
      price: new FormControl(),
      description: new FormControl(),
      provider_id: new FormControl(),
      vehicule_id: new FormControl(this.getParamId)
    });
  }

  create(){
    this.apiService.createCtrltech(this.ctrltechFormGroup.value).subscribe((response:ApiResponse) => {
      this.ctrltechFormGroup.reset();
      this.successMsg = response.code;
    })
    console.log(this.ctrltechFormGroup.value);
  }

  delete(id:string){
    console.log(this.ctrltechFormGroup.value);
  }

  update(id:string){
    console.log(this.ctrltechFormGroup.value);
  }

  getAllCtrltechFromCurrentVehicule(){
    this.apiService.getAllCtrltechByVehiculeId(this.getParamId).subscribe((response: ApiResponse) =>{
      this.ctrltechList = response.data;
      console.log('ctrltechList => ', this.ctrltechList);
    })
  }

  getProvidersList(){
    this.apiService.getAllProviders().subscribe((response: ApiResponse) => {
      this.providersList = response.data;
      console.log('Providers List => ', this.providersList);
    })
  }
}
