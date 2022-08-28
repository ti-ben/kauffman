import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Site} from "../../../site/model/site";
import {ApiResponse} from "../../../../shared/model";
import {Status} from "../../../status/model/status";
import {Address} from "../../../address/model/address";
import {UserCreatePayload} from "../../model/payload/user-create.payload";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  errorMsg: string = '';
  userFormGroup!: FormGroup;
  sitesList: Site[] = [];
  successMsg: string = '';
  statusList: Status[] = [];
  addressList: Address[] = [];
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allSiteList();
    this.allStatusList();
    this.allAddressList();
    this.initForm();
  }

  private initForm(): void {
    this.userFormGroup = new FormGroup({
      user_id: new FormControl(null),
      firstname: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z].*/)]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z].*/)]),
      gender: new FormControl(null),
      avatar: new FormControl('noAvatar.png'),
      dob: new FormControl(this.currentDate),
      email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9.@]*')]),
      phone_pro: new FormControl(null),
      phone_perso: new FormControl(null),
      nationality: new FormControl(null),
      numirn: new FormControl(null, [Validators.required, Validators.pattern(('[0-9.-]*'))]),
      driver_license: new FormControl(null),
      created_on: new FormControl(this.currentDate),
      updated_on: new FormControl(this.currentDate),
      pob: new FormControl(null),
      active: new FormControl(true),
      site: new FormControl(null),
      address: new FormControl(),
      status: new FormControl(null),
    });
  }

  create(): void {
    if (this.userFormGroup.valid) {
      this.userFormGroup.value.site = {site_id: this.userFormGroup.value.site}
      this.userFormGroup.value.address = {address_id: this.userFormGroup.value.address}
      this.userFormGroup.value.status = {status_id: this.userFormGroup.value.status}
      const payload: UserCreatePayload = this.userFormGroup.value;
      this.apiService.createUser(payload).subscribe((response: ApiResponse) => {
        this.initForm();
        this.successMsg = response.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((response: ApiResponse) => {
      this.sitesList = response.data;
      if (response.data) {
        console.log('Success');
        console.log('Site list :', this.sitesList);
      } else {
        console.log('Failed');
      }
    })
  }

  allStatusList() {
    this.apiService.getAllStatus().subscribe((response: ApiResponse) => {
      this.statusList = response.data;
      if (response.data) {
        console.log('Success');
      } else {
        console.log('Failed');
      }
    })
  }

  allAddressList() {
    this.apiService.getAllAddress().subscribe((response: ApiResponse) => {
      this.addressList = response.data;
      if (response.data) {
        console.log('Success');
      } else {
        console.log('Failed');
      }
    })
  }

}
