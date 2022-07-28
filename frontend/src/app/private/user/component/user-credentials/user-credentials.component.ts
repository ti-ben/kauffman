import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-credential',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.scss']
})

export class UserCredentialsComponent implements OnInit {

  cFormGroup!: FormGroup;
  uDetails: any = '';
  errorMsg: string = '';
  successMsg: string = '';
  rankList: any = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  randomPassword = Math.random().toString(36).slice(0, 20);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userDetails();
    this.allRankList();
    if (true) {
      this.apiService.getUserCredential('benoit.titeux@protonmail.com').subscribe((res: ApiResponse) => {
        this.cFormGroup = new FormGroup({
          user_id: new FormControl(this.uDetails.user_id),
          credentials_id: new FormControl(res.data.credentials_id),
          username: new FormControl(res.data.username),
          password: new FormControl(res.data.password),
          created_on: new FormControl(res.data.created_on),
          updated_on: new FormControl(res.data.updated_on),
          active: new FormControl(res.data.active),
          rank_id: new FormControl(res.data.rank.rank_id),
        });
      });
    } else {
      this.initForm();
    }
  }

  save() {
    console.log('credentialsForm content = ', this.cFormGroup.value);
    if (this.cFormGroup.valid) {
      this.apiService.saveUserCredential(this.cFormGroup.value).subscribe((response: ApiResponse) => {
        this.cFormGroup.reset();
        this.successMsg = response.code;
      });
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update() {
    console.log('credentialsForm content = ', this.cFormGroup.value);
  }

  private initForm(): void {
    this.cFormGroup = new FormGroup({
      'user_id': new FormControl(this.uDetails.user_id, [Validators.required]),
      'credentials_id': new FormControl(this.uDetails.credentials_id, [Validators.required]),
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl(this.randomPassword, [Validators.required]),
      'created_on': new FormControl(this.currentDate, [Validators.required]),
      'updated_on': new FormControl(this.currentDate, [Validators.required]),
      'active': new FormControl(true, [Validators.required]),
      'rank_id': new FormControl('', [Validators.required]),
    });
  }

  userDetails() {
    this.apiService.getSingleUser(this.getParamId).subscribe(res => {
      this.uDetails = res.data;
    })
  }

  private allRankList() {
    this.apiService.getAllRank().subscribe((response: ApiResponse) => {
      this.rankList = response.data;
    })
  }

}
