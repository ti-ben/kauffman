import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-numberplate-create',
  templateUrl: './numberplate-create.component.html',
  styleUrls: ['./numberplate-create.component.scss']
})
export class NumberplateCreateComponent implements OnInit {

  errorMsg: any;
  successMsg: any;
  getParamId: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParamId = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.getParamId)
    {
      this.apiService.getSingleNumberplate(this.getParamId).subscribe((res) => {
        console.log('res :', res);
        this.numberplateFormCreate.patchValue({
          'site_id': res.data.site.name,
          'numberplate_id': res.data.numberplate_id,
          'num_plate': res.data.num_plate,
          'dop': res.data.dop,
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

  numberplateCreate() {
    if (this.numberplateFormCreate.valid) {
      this.apiService.createSite(this.numberplateFormCreate.value).subscribe((res) => {
        console.log('res :', res);
        this.numberplateFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  updateNumberplate() {
    console.log('Form update content :', this.numberplateFormCreate.value)
    if(this.numberplateFormCreate.valid)
    {
      this.apiService.updateSite(this.numberplateFormCreate.value, this.getParamId).subscribe((res)=>{
        console.log('updated :', res);
        this.successMsg = res.code;
      })
    }
    else
    {
      this.errorMsg = 'All fields are required';
    }
  }

}
