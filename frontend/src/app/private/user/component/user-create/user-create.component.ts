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
  uformGroup!: FormGroup;
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
    this.uformGroup = new FormGroup({
      'user_id': new FormControl(''),
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'gender': new FormControl(''),
      'avatar': new FormControl('noAvatar.png'),
      'dob': new FormControl(''),
      'email': new FormControl(''),
      'phone_pro': new FormControl(''),
      'phone_perso': new FormControl(''),
      'nationality': new FormControl(''),
      'numirn': new FormControl(''),
      'driver_license': new FormControl(''),
      'created_on': new FormControl(this.currentDate),
      'updated_on': new FormControl(this.currentDate),
      'pob': new FormControl(''),
      'active': new FormControl(true),
      'site_id': new FormControl(),
      'address_id': new FormControl(),
      'status_id': new FormControl(),
    });
  }

  create() {
    console.log('Form content: ', this.uformGroup.value)
    if (this.uformGroup.valid) {
      this.apiService.createUser(this.uformGroup.value).subscribe((response: ApiResponse) => {
        this.uformGroup.reset();
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
