import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {NumberplateCreatePayload} from "../../../numberplate/model/payload/numberplate-create.payload";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss']
})
export class SiteCreateComponent implements OnInit {

  sFormGroup!: FormGroup;
  errorMsg: any = '';
  successMsg: any ='';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id')

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.sFormGroup = new FormGroup({
      'site_id': new FormControl(),
      'name': new FormControl('', Validators.required),
      'created_on': new FormControl('', Validators.required),
      'description': new FormControl(),
      'active': new FormControl(true)
    });
  }

  create() {
    if (this.sFormGroup.valid) {
      const payload: NumberplateCreatePayload = this.sFormGroup.value;
      this.apiService.createSite(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.sFormGroup.reset();
          this.successMsg = response.code;
        }
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }



}
