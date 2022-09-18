import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {Site} from "../../../site/model/site";
import {Status} from "../../../status/model/status";
import {Address} from "../../../address/model/address";
import {UserUpdatePayload} from "../../model/payload/user-update.payload";

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.scss']
})
export class UserIdentityComponent implements OnInit {

  uDetails: any = '';
  errorMsg: string = '';
  sitesList: Site[] = [];
  uFormGroup!: FormGroup;
  successMsg: string = '';
  statusList: Status[] = [];
  addressList: Address[] = [];
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.allSiteList();
    this.allStatusList();
    this.allAddressList();
    this.initForm();
  }

  initForm() {
    this.apiService.getSingleUser(this.getParamId).subscribe((res: ApiResponse) => {
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
        site: new FormControl(res.data.site.site_id),
        status: new FormControl(res.data.status.status_id),
        address_id: new FormControl(res.data.address.address_id),
        road: new FormControl(res.data.address.road),
        num: new FormControl(res.data.address.num),
        town: new FormControl(res.data.address.town),
        postal_code: new FormControl(res.data.address.postal_code),
        country: new FormControl(res.data.address.country)
      });
    });
  }

  update() {
    this.uFormGroup.value.status = {status_id: this.uFormGroup.value.status}
    this.uFormGroup.value.site = {site_id: this.uFormGroup.value.site}
    this.uFormGroup.value.address = {
      address_id: this.uFormGroup.value.address_id,
      road: this.uFormGroup.value.road,
      num: this.uFormGroup.value.num,
      town: this.uFormGroup.value.town,
      postal_code: this.uFormGroup.value.postal_code,
      country: this.uFormGroup.value.country,
    }
    console.log(this.uFormGroup.value);
    if (this.uFormGroup.valid) {
      const payload: UserUpdatePayload = this.uFormGroup.value;
      this.apiService.updateUser(payload).subscribe((response: ApiResponse) => {
        this.successMsg = response.code;
        this.initForm();
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((response: ApiResponse) => {
      this.sitesList = response.data;
      if (this.sitesList == null) {
        //console.log('site list instance is null or undefined');
      } else {
        //console.log('site list instance is not null or undefined'); // ok now
      }
    })
  }

  allStatusList() {
    this.apiService.getAllStatus().subscribe((response: ApiResponse) => {
      this.statusList = response.data;
      if (this.statusList == null) {
        //console.log('Status list instance is null or undefined');
      } else {
        //console.log('Status list instance is not null or undefined'); // ok now
      }
    })
  }

  allAddressList() {
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
