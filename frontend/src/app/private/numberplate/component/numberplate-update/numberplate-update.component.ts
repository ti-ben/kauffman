import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";
import {NumberplateUpdatePayload} from "../../model/payload/numberplate-update.payload";
import {Site} from "../../../site/model/site";

@Component({
  selector: 'app-numberplate-update',
  templateUrl: './numberplate-update.component.html',
  styleUrls: ['./numberplate-update.component.scss']
})

export class NumberplateUpdateComponent implements OnInit {

  formGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  sitesList: Site[] = [];
  //sitesList: any;
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSitesList();
    this.apiService.getSingleNumberplate(this.getParamId).subscribe((response: ApiResponse) => {
      this.formGroup = new FormGroup({
        site: new FormControl(response.data.site.site_id),
        num_plate: new FormControl(response.data.num_plate),
        dop: new FormControl(response.data.dop.toString().slice(0, 10)),
        active: new FormControl(response.data.active)
      })
    })
  }

  update() {
    if (this.formGroup.valid) {
      const payload: NumberplateUpdatePayload = this.formGroup.value;
      this.formGroup.value.site = {site_id: payload.site}
      this.apiService.updateNumberplate(payload, this.getParamId).subscribe((res) => {
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  getSitesList() {
    this.apiService.getAllSite().subscribe((response: ApiResponse) => {
      this.sitesList = response.data;
      if (this.sitesList == null) {
        this.errorMsg = response.code;
      }
    })
  }

}
