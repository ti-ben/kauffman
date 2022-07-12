import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  errorMsg: any;
  successMsg: any;
  getParamId: any;
  sitesList: any;
  statusList: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.allSiteList();
    this.allStatusList();
  }

  userFormCreate = new FormGroup({
    'user_id': new FormControl(),
    'firstname': new FormControl('', Validators.required),
    'lastname': new FormControl('', Validators.required),
    'gender': new FormControl(),
    'avatar': new FormControl('noAvatar.png'),
    'dob': new FormControl(),
    'email': new FormControl(),
    'password': new FormControl(),
    'phone_pro': new FormControl(),
    'phone_perso': new FormControl(),
    'nationality': new FormControl(),
    'numirn': new FormControl(),
    'driver_license': new FormControl(),
    'created_on': new FormControl(),
    'updated_on': new FormControl(),
    'pob': new FormControl(),
    'active': new FormControl(true),
    'site_id': new FormControl(),
    'address_id': new FormControl(),
    'status_id': new FormControl(),
  });

  userCreate() {
    console.log('Form content: ', this.userFormCreate.value)
    if (this.userFormCreate.valid) {
      this.apiService.createUser(this.userFormCreate.value).subscribe((res) => {
        this.userFormCreate.reset();
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
        console.log('Instance is null or undefined');
      } else {
        console.log('Instance is not null or undefined'); // ok now
        console.log('Site list :', this.sitesList);
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
}
