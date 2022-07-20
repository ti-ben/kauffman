import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {NumberplateCreatePayload} from "../../../numberplate/model/numberplate-create.payload";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss']
})
export class SiteCreateComponent implements OnInit {

  errorMsg: any;
  successMsg: any;
  getParamId: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.getParamId) {
      this.apiService.getSingleSite(this.getParamId).subscribe((res) => {
        this.siteFormCreate.patchValue({
          'site_id': res.data.site_id,
          'name': res.data.name,
          'created_on': res.data.created_on.toString().slice(0, 10),
          'description': res.data.description,
          'active': res.data.active
        });
      });
    }
  }

  siteFormCreate = new FormGroup({
    'site_id': new FormControl(),
    'name': new FormControl('', Validators.required),
    'created_on': new FormControl('', Validators.required),
    'description': new FormControl(),
    'active': new FormControl(true)
  })

  siteCreate() {
    if (this.siteFormCreate.valid) {
      const payload: NumberplateCreatePayload = this.siteFormCreate.value;
      this.apiService.createSite(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.siteFormCreate.reset();
          this.successMsg = response.code;
        }
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  updateSite() {
    if (this.siteFormCreate.valid) {
      this.apiService.updateSite(this.siteFormCreate.value, this.getParamId).subscribe((res) => {
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

}
