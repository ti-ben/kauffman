import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {Site} from "../../../site/model/site";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Numberplate} from "../../../numberplate/model/business/numberplate";

@Component({
  selector: 'app-vehicule-create',
  templateUrl: './vehicule-create.component.html',
  styleUrls: ['./vehicule-create.component.scss']
})
export class VehiculeCreateComponent implements OnInit {

  errorMsg: string = '';
  sitesList: Site[] = [];
  formGroup!: FormGroup;
  successMsg: string = '';
  numberplateList: Numberplate[] = [];
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allNumberplateList();
    this.allSiteList();
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      active: new FormControl('true', Validators.required),
      avatar: new FormControl('truck.png'),
      bought_by: new FormControl(null),
      brand: new FormControl('', Validators.required),
      cde_carrosserie: new FormControl(''),
      classe_enviro: new FormControl(null, Validators.required),
      created_on: new FormControl(this.currentDate),
      date_of_purchase: new FormControl(this.currentDate),
      fuel: new FormControl(null),
      genre: new FormControl(''),
      metrology: new FormControl(''),
      mma: new FormControl(''),
      mmat: new FormControl(''),
      mom: new FormControl(''),
      mta: new FormControl(''),
      nbr_km: new FormControl(''),
      num_chassis: new FormControl(''),
      price: new FormControl(''),
      type: new FormControl(null, Validators.required),
      updated_on: new FormControl(this.currentDate),
      numberplate_id: new FormControl(null, Validators.required),
      site_id: new FormControl(null, Validators.required),
    });
  }

  create() {
    if (this.formGroup.valid) {
      this.formGroup.value.site = {site_id: this.formGroup.value.site_id}
      this.formGroup.value.numberplate = {numberplate_id: this.formGroup.value.numberplate_id}
      this.apiService.createVehicule(this.formGroup.value).subscribe((response: ApiResponse) => {
        this.formGroup.reset();
        this.successMsg = response.code;
      })
    }
    else
    {
      this.errorMsg = 'All fields are required';
    }
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((response: ApiResponse) => {
      this.sitesList = response.data;
    })
  }

  allNumberplateList() {
    this.apiService.getAllNumberplate().subscribe((response: ApiResponse) => {
      this.numberplateList = response.data;
    })
  }

}
