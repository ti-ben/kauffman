import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.scss']
})
export class StatusUpdateComponent implements OnInit {

  errorMsg: string = '';
  formGroup!: FormGroup;
  successMsg: string = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.apiService.getSingleStatus(this.getParamId).subscribe((response: ApiResponse) => {
      this.formGroup = new FormGroup({
        status_id: new FormControl(response.data.status_id),
        name: new FormControl(response.data.name),
        description: new FormControl(response.data.description),
        active: new FormControl(response.data.active)
      });
    })
  }

  update() {
    if (this.formGroup.value) {
      this.apiService.updateRank(this.formGroup.value, this.getParamId).subscribe((response: ApiResponse) => {
        this.successMsg = response.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

}
