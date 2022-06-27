import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Site} from "../../../site/model/site";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  readData: any;
  errorMsg: any;
  successMsg: any;
  getParamId: any;
  lstSite: any;


  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.lstSite = this.getAllData();

    if(this.getParamId)
    {
      this.apiService.getSingleUser(this.getParamId).subscribe((res) => {
        this.userFormCreate.patchValue({
          'user_id': res.data.user_id,
          'firstname': res.data.firstname,
          'lastname': res.data.lastname,
          'gender': res.data.gender,
          'avatar': res.data.avatar,
          'dob': res.data.dob,
          'email': res.data.email,
          'password': res.data.password,
          'phone_pro': res.data.phone_pro,
          'phone_perso': res.data.phone_perso,
          'nationality': res.data.nationality,
          'numirn': res.data.numirn,
          'driver_license': res.data.driver_license,
          'created_on': res.data.created_on,
          'updated_on': res.data.updated_on,
          'pob': res.data.pob,
          'active': res.data.active,
          'site_id': res.data.site_id,
          'address_id': res.data.address_id,
          'status_id': res.data.status_id
        });
      });
    }
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
    if (this.userFormCreate.valid) {
      this.apiService.createUser(this.userFormCreate.value).subscribe((res) => {
        this.userFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  updateUser() {
    console.log('Form update content :', this.userFormCreate.value)
    if(this.userFormCreate.valid)
    {
      this.apiService.updateUser(this.userFormCreate.value, this.getParamId).subscribe((res)=>{
        console.log('updated :', res);
        this.successMsg = res.code;
      })
    }
    else
    {
      this.errorMsg = 'All fields are required';
    }
  }

  getAllData(): void
  {
    this.apiService.getAllSite().subscribe((res)=> {
      this.readData = res.data;
      console.log("getAllSite res :", this.readData);
    })
  }

}
