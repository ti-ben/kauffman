import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {FormControl, FormGroup} from "@angular/forms";
import {Site} from "../../../site/model/site";
import {Numberplate} from "../../../numberplate/model/numberplate";

@Component({
  selector: 'app-vehicule-identity',
  templateUrl: './vehicule-identity.component.html',
  styleUrls: ['./vehicule-identity.component.scss']
})
export class VehiculeIdentityComponent implements OnInit {

  errorMsg: string = '';
  sitesList: Site[] = [];
  identityFormGroup!: FormGroup;
  successMsg: string = '';
  numberplateList: Numberplate[] = [];
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.allNumberplateList();
    this.allSiteList();
    this.apiService.getSingleVehicule(this.getParamId).subscribe((response: ApiResponse) => {
      this.identityFormGroup = new FormGroup({
        vehicule_id: new FormControl(response.data.vehicule_id),
        active: new FormControl(response.data.active),
        avatar: new FormControl('noAvatar.png'),
        bought_by: new FormControl(response.data.bought_by),
        brand: new FormControl(response.data.brand),
        cde_carrosserie: new FormControl(response.data.cde_carrosserie),
        classe_enviro: new FormControl(response.data.classe_enviro),
        created_on: new FormControl(response.data.created_on.toString().slice(0, 10)),
        date_of_purchase: new FormControl(response.data.date_of_purchase.toString().slice(0, 10)),
        fuel: new FormControl(response.data.fuel),
        genre: new FormControl(response.data.genre),
        metrology: new FormControl(response.data.metrology),
        mma: new FormControl(response.data.mma),
        mmat: new FormControl(response.data.mmat),
        mom: new FormControl(response.data.mom),
        mta: new FormControl(response.data.mta),
        nbr_km: new FormControl(response.data.nbr_km),
        num_chassis: new FormControl(response.data.num_chassis),
        price: new FormControl(response.data.price),
        type: new FormControl(response.data.type),
        updated_on: new FormControl(response.data.updated_on.toString().slice(0, 10)),
        numberplate_id: new FormControl(response.data.numberplate.numberplate_id),
        site_id: new FormControl(response.data.site.site_id),
      });
    })
  }

  update() {
    console.log('vFormGroup => ', this.identityFormGroup.value);
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((response: ApiResponse) => {
      this.sitesList = response.data;
      if (this.sitesList == null) {
        //console.log('Instance is null or undefined');
      } else {
        //console.log('Instance is not null or undefined'); // ok now
        //console.log('Site list :', this.sitesList);
      }
    })
  }

  allNumberplateList() {
    this.apiService.getAllNumberplate().subscribe((response: ApiResponse) => {
      this.numberplateList = response.data;
    })
  }

}
