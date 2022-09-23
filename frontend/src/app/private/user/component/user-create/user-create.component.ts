import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Site} from "../../../site/model/site";
import {ApiResponse} from "../../../../shared/model";
import {Status} from "../../../status/model/status";
import {Address} from "../../../address/model/address";
import {UserCreatePayload} from "../../model/payload/user-create.payload";
import {ImageUploadService} from "../../../../shared/services/image-upload.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  progress:number = 0;
  errorMsg: string = '';
  sitesList: Site[] = [];
  successMsg: string = '';
  userFormGroup!: FormGroup;
  statusList: Status[] = [];
  addressList: Address[] = [];
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  emailPattern = "^[a-zA-Z0-9._% -]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, public imageUploadService: ImageUploadService) {
  }

  ngOnInit(): void {
    this.allSiteList();
    this.allStatusList();
    this.allAddressList();
    this.initForm();
  }

  private initForm(): void {
    this.userFormGroup = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z].*/)]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z].*/)]),
      gender: new FormControl(null),
      avatar: new FormControl(null),
      dob: new FormControl(this.currentDate),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
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
      status: new FormControl(null),
      road: new FormControl(null),
      num: new FormControl(null),
      town: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null)
    });
  }

  get m(){
    return this.userFormGroup.controls;
  }

  create(): void {
    if (this.userFormGroup.valid) {
      this.userFormGroup.value.site = {site_id: this.userFormGroup.value.site}
      this.userFormGroup.value.address = {
        address_id: null,
        road: this.userFormGroup.value.road,
        num: this.userFormGroup.value.num,
        town: this.userFormGroup.value.town,
        postal_code: this.userFormGroup.value.postal_code,
        country: this.userFormGroup.value.country
      }
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
        //console.log('Success');
        //console.log('Site list :', this.sitesList);
      } else {
        //console.log('Failed');
      }
    })
  }

  allStatusList() {
    this.apiService.getAllStatus().subscribe((response: ApiResponse) => {
      this.statusList = response.data;
      if (response.data) {
        //console.log('Success');
      } else {
        //console.log('Failed');
      }
    })
  }

  allAddressList() {
    this.apiService.getAllAddress().subscribe((response: ApiResponse) => {
      this.addressList = response.data;
      if (response.data) {
        //console.log('Success');
      } else {
        //console.log('Failed');
      }
    })
  }

}
