import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Site} from "../../../site/model/site";
import {ApiResponse} from "../../../../shared/model";
import {Status} from "../../../status/model/status";
import {Address} from "../../../address/model/address";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  errorMsg: string = '';
  successMsg: string = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  sitesList: Site[] = [];
  statusList: Status[] = [];
  addressList: Address[] = [];
  uFormGroup!: FormGroup;
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
    this.uFormGroup = new FormGroup({
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
      address: new FormControl(null),
      status: new FormControl(null),
    });
  }

  create(): void {
    this.uFormGroup.value.site = {site_id: this.uFormGroup.value.site}
    this.uFormGroup.value.address = {address_id: this.uFormGroup.value.address}
    this.uFormGroup.value.status = {status_id: this.uFormGroup.value.status}
    console.log('Form content: ', this.uFormGroup.value)
    if (this.uFormGroup.valid) {
      this.apiService.createUser(this.uFormGroup.value).subscribe((response: ApiResponse) => {
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
      if (this.sitesList == null) {
        //console.log('Instance is null or undefined');
      } else {
        //console.log('Instance is not null or undefined'); // ok now
        //console.log('Site list :', this.sitesList);
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
