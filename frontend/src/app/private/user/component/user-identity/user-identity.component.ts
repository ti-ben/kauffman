import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-user-identity',
  templateUrl: './user-identity.component.html',
  styleUrls: ['./user-identity.component.scss']
})
export class UserIdentityComponent implements OnInit {

  uDetails: any = '';
  errorMsg: any = '';
  successMsg: any = '';
  getParamId: any = '';
  sitesList: any;
  statusList: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.allSiteList();
    this.allStatusList();
    if (this.getParamId) {
      this.apiService.getSingleUser(this.getParamId).subscribe((res) => {
        this.userFormUpdate.patchValue({
          'user_id': res.data.user_id,
          'firstname': res.data.firstname,
          'lastname': res.data.lastname,
          'gender': res.data.gender,
          'avatar': res.data.avatar,
          'dob': res.data.dob.toString().slice(0, 10),
          'email': res.data.email,
          'password': res.data.password,
          'phone_pro': res.data.phone_pro,
          'phone_perso': res.data.phone_perso,
          'nationality': res.data.nationality,
          'numirn': res.data.numirn,
          'driver_license': res.data.driver_license,
          'created_on': res.data.created_on.toString().slice(0, 10),
          'updated_on': res.data.updated_on.toString().slice(0, 10),
          'pob': res.data.pob,
          'active': res.data.active,
          'site_id': res.data.site_id,
          'address_id': res.data.address_id,
          'status_id': res.data.status_id,
        });
      });
    }
  }

  userFormUpdate = new FormGroup({
    'user_id': new FormControl(''),
    'firstname': new FormControl(''),
    'lastname': new FormControl(''),
    'gender': new FormControl(''),
    'avatar': new FormControl(''),
    'dob': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl(''),
    'phone_pro': new FormControl(''),
    'phone_perso': new FormControl(''),
    'nationality': new FormControl(''),
    'numirn': new FormControl(''),
    'driver_license': new FormControl(''),
    'created_on': new FormControl(''),
    'updated_on': new FormControl(''),
    'pob': new FormControl(''),
    'active': new FormControl(''),
    'site_id': new FormControl(''),
    'address_id': new FormControl(''),
    'status_id': new FormControl(''),
  });

  updateUser() {
    if (this.userFormUpdate.valid) {
      this.apiService.updateUser(this.userFormUpdate.value, this.getParamId).subscribe((res) => {
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

  allAddressList() {

  }
}
