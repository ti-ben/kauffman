import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";
import {NumberplateCreatePayload} from "../../model/numberplate-create.payload";

@Component({
  selector: 'app-numberplate-create',
  templateUrl: './numberplate-create.component.html',
  styleUrls: ['./numberplate-create.component.scss']
})
export class NumberplateCreateComponent implements OnInit {

  errorMsg: any;
  successMsg: any;
  getParamId: any;
  sitesList: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id')
    this.allSiteList();
    if(this.getParamId)
    {
      this.apiService.getSingleNumberplate(this.getParamId).subscribe((res) => {
        //console.log('res :', res);
        this.numberplateFormCreate.patchValue({
          'site_id': res.data.site.name,
          'numberplate_id': res.data.numberplate_id,
          'num_plate': res.data.num_plate,
          'dop': res.data.dop.toString().slice(0,10),
          'active': res.data.active
        });
      });
    }
  }

  numberplateFormCreate = new FormGroup({
    'numberplate_id': new FormControl(),
    'site_id': new FormControl(),
    'num_plate': new FormControl('', Validators.required),
    'dop': new FormControl(''),
    'active': new FormControl(true)
  });

  numberplateCreate(): void {
    if (this.numberplateFormCreate.valid) {
      const payload: NumberplateCreatePayload = this.numberplateFormCreate.value;

      //console.log('Payload = ', payload);

      this.apiService.createNumberplate(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.numberplateFormCreate.reset();
          this.successMsg = response.code;
        }
      })


    } else {
      this.errorMsg = 'All fields are required';

    }
  }

  updateNumberplate() {
    if(this.numberplateFormCreate.valid)
    {
      this.apiService.updateSite(this.numberplateFormCreate.value, this.getParamId).subscribe((res)=>{
        this.successMsg = res.code;
      })
    }
    else
    {
      this.errorMsg = 'All fields are required';
    }
  }

  allSiteList() {
    this.apiService.getAllSite().subscribe((res) => {
      this.sitesList = res.data;
      if (this.sitesList == null) {
        //console.log('site list instance is null or undefined');
      } else {
        //console.log('site list instance is not null or undefined'); // ok now
      }
    })
  }

}
