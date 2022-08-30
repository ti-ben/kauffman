import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Rank} from "../../../rank/model/rank";

@Component({
  selector: 'app-user-credential',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.scss']
})

export class UserCredentialsComponent implements OnInit {

  uDetails: any = '';
  errorMsg: string = '';
  successMsg: string = '';
  rankList: Rank[] = [];
  uCredential: any = '';
  credentialFormGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  currentDate = new Date().toISOString().substring(0, 10);
  randomPassword = Math.random().toString(36).slice(0, 20);

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userDetails();
    this.credential();
    this.allRankList();
    if (this.uDetails.credentials) {
      this.credentialFormGroup = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        active: new FormControl(),
        rank: new FormControl(),
      });
    } else {
      this.initForm();
    }
  }

  save() {
    this.credentialFormGroup.value.user = {user_id: this.getParamId}
    this.credentialFormGroup.value.rank = {rank_id: this.credentialFormGroup.value.rank_id}
    if (this.credentialFormGroup.valid) {
      this.apiService.saveUserCredential(this.credentialFormGroup.value).subscribe((response: ApiResponse) => {
        this.credentialFormGroup.reset();
        this.successMsg = response.code;
      });
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  update() {
    console.log('credentialsForm content = ', this.credentialFormGroup.value);
  }

  private initForm(): void {
    this.credentialFormGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(this.randomPassword, [Validators.required]),
      created_on: new FormControl(this.currentDate, [Validators.required]),
      updated_on: new FormControl(this.currentDate, [Validators.required]),
      active: new FormControl(true, [Validators.required]),
      rank: new FormControl(null, [Validators.required]),
    });
  }

  userDetails() {
    this.apiService.getSingleUser(this.getParamId).subscribe(response => {
      this.uDetails = response.data;
    })
  }

  credential() {
    this.apiService.getUserCredential(this.uDetails.email).subscribe((response: ApiResponse) => {
      this.uCredential = response.data
    })
  }

  private allRankList() {
    this.apiService.getAllRank().subscribe(response => {
      this.rankList = response.data;
    })
  }

}
