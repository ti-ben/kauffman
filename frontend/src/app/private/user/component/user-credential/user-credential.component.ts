import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-credential',
  templateUrl: './user-credential.component.html',
  styleUrls: ['./user-credential.component.scss']
})

export class UserCredentialComponent implements OnInit {

  uDetails: any = '';
  uCredential: any = '';
  errorMsg: any = '';
  successMsg: any = '';
  rankList: any = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  randomPassword = Math.random().toString(36).slice(0, 20);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userDetails();
    this.userCredential();
    this.allRankList();
    if(this.uCredential.credential_id)
    {
      this.formGroup.patchValue({
        'user_id': this.uCredential.user_id,
        'username': this.uCredential.username,
        'password': this.uCredential.password,
        'created_on': this.uCredential.created_on,
        'updated_on': this.uCredential.updated_on,
        'active': this.uCredential.active,
        'rank_id': this.uCredential.rank_id,
      });
    }
  }

  save() {
    console.log('Content = ', this.formGroup.value);
    if (this.formGroup.valid) {
      this.apiService.saveUserCredential(this.formGroup.value).subscribe((response: ApiResponse) => {
        this.formGroup.reset();
        this.successMsg = response.code;
      });
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update(){
    console.log('Content = ', this.formGroup.value);
  }

  private userDetails() {
    this.apiService.getSingleUser(this.getParamId).subscribe((response: ApiResponse) => {
      this.uDetails = response.data;
    })
  }

  private userCredential() {
    this.apiService.getUserCredential(this.getParamId).subscribe((response: ApiResponse) => {
      this.uCredential = response.data;
      console.log('Credential = ', this.uCredential);
    })
  }

  private allRankList() {
    this.apiService.getAllRank().subscribe((response: ApiResponse) => {
      this.rankList = response.data;
    })
  }

  formGroup = new FormGroup({
    'user_id': new FormControl(this.getParamId),
    'username': new FormControl(this.uDetails.email, [Validators.required]),
    'password': new FormControl(this.randomPassword),
    'created_on': new FormControl(this.currentDate),
    'updated_on': new FormControl(this.currentDate),
    'active': new FormControl(''),
    'rank_id': new FormControl(''),
  });


}
