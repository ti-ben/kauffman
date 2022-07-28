import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {Site} from "../../../site/model/site";
import {Status} from "../../../status/model/status";
import {Address} from "../../../address/model/address";

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.scss']
})
export class UserIdentityComponent implements OnInit {

  uFormGroup!: FormGroup;
  uDetails: any = '';
  errorMsg: string = '';
  successMsg: string = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  sitesList: Site[] = [];
  statusList: Status[] = [];
  addressList: Address[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.allSiteList();
    this.allStatusList();
    this.allAddressList();
    this.apiService.getSingleUser(this.getParamId).subscribe((res) => {
      this.uFormGroup = new FormGroup({
        user_id: new FormControl(res.data.user_id),
        firstname: new FormControl(res.data.firstname),
        lastname: new FormControl(res.data.lastname),
        gender: new FormControl(res.data.gender),
        avatar: new FormControl(res.data.avatar),
        dob: new FormControl(res.data.dob.toString().slice(0, 10)),
        email: new FormControl(res.data.email),
        phone_pro: new FormControl(res.data.phone_pro),
        phone_perso: new FormControl(res.data.phone_perso),
        nationality: new FormControl(res.data.nationality),
        numirn: new FormControl(res.data.numirn),
        driver_license: new FormControl(res.data.driver_license),
        created_on: new FormControl(res.data.created_on.toString().slice(0, 10)),
        updated_on: new FormControl(res.data.updated_on.toString().slice(0, 10)),
        pob: new FormControl(res.data.pob),
        active: new FormControl(res.data.active),
        site_id: new FormControl(res.data.site.site_id),
        address_id: new FormControl(res.data.address.address_id),
        status_id: new FormControl(res.data.status.status_id)
      });
    });
  }


  update() {
    if (this.uFormGroup.valid) {
      this.apiService.updateUser(this.uFormGroup.value, this.getParamId).subscribe((res) => {
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((res) => {
      this.sitesList = res.data;
      if (this.sitesList == null) {
        //console.log('site list instance is null or undefined');
      } else {
        //console.log('site list instance is not null or undefined'); // ok now
      }
    })
  }

  allStatusList() {
    this.apiService.getAllStatus().subscribe((res) => {
      this.statusList = res.data;
      if (this.statusList == null) {
        //console.log('Status list instance is null or undefined');
      } else {
        //console.log('Status list instance is not null or undefined'); // ok now
      }
    })
  }

  allAddressList(){
    this.apiService.getAllAddress().subscribe((response: ApiResponse) => {
      this.addressList = response.data;
      if (this.addressList == null) {
        //console.log('Address list instance is null or undefined');
      } else {
        //console.log('Address list instance is not null or undefined'); // ok now
      }
    })
  }
}
