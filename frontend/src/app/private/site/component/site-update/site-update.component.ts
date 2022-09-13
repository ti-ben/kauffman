import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-site-update',
  templateUrl: './site-update.component.html',
  styleUrls: ['./site-update.component.scss']
})
export class SiteUpdateComponent implements OnInit {

  sFormGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.apiService.getSingleSite(this.getParamId).subscribe((response: ApiResponse) => {
      this.sFormGroup = new FormGroup({
        site_id: new FormControl(response.data.site_id),
        name: new FormControl(response.data.name),
        created_on: new FormControl(response.data.created_on.toString().slice(0, 10)),
        description: new FormControl(response.data.description),
        active: new FormControl(response.data.active),
        road: new FormControl(response.data.address.road),
        num: new FormControl(response.data.address.num),
        town: new FormControl(response.data.address.town),
        postal_code: new FormControl(response.data.address.postal_code),
        country: new FormControl(response.data.address.country)
      })
    })
  }

  update() {
    if (this.sFormGroup.valid) {
      this.apiService.updateSite(this.sFormGroup.value, this.getParamId).subscribe((res) => {
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }
}
