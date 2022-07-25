import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-credential',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.scss']
})

export class UserCredentialsComponent implements OnInit {

  uDetails: any = '';
  errorMsg: any = '';
  successMsg: any = '';
  rankList: any = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  randomPassword = Math.random().toString(36).slice(0, 20);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userDetails();
    this.allRankList();
    if (this.uDetails) {
      this.apiService.getUserCredential(this.uDetails.email).subscribe((res) => {
        this.credentialsForm.setValue({
          'user_id': res.data.user_id,
          'credentials_id': res.data.credentials_id,
          'username': res.data.username,
          'password': res.data.password,
          'created_on': res.data.created_on,
          'updated_on': res.data.updated_on,
          'active': res.data.active,
          'rank_id': res.data.rank_id,
        });
      });
    }
  }

  save() {
    console.log('credentialsForm content = ', this.credentialsForm.value);
    if (this.credentialsForm.valid) {
      this.apiService.saveUserCredential(this.credentialsForm.value).subscribe((response: ApiResponse) => {
        this.credentialsForm.reset();
        this.successMsg = response.code;
      });
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update() {
    console.log('credentialsForm content = ', this.credentialsForm.value);
  }

  private userDetails() {
    this.apiService.getSingleUser(this.getParamId).subscribe((response: ApiResponse) => {
      this.uDetails = response.data;
    })
  }

  private allRankList() {
    this.apiService.getAllRank().subscribe((response: ApiResponse) => {
      this.rankList = response.data;
    })
  }

  credentialsForm = new FormGroup({
    'user_id': new FormControl(this.uDetails.user_id, [Validators.required]),
    'credentials_id': new FormControl(this.uDetails.credentials_id, [Validators.required]),
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl(this.randomPassword, [Validators.required]),
    'created_on': new FormControl(this.currentDate, [Validators.required]),
    'updated_on': new FormControl(this.currentDate, [Validators.required]),
    'active': new FormControl(true, [Validators.required]),
    'rank_id': new FormControl(undefined, [Validators.required]),
  })


}
