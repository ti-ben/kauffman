import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

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

    if(this.getParamId)
    {
      this.apiService.getSingleSite(this.getParamId).subscribe((res) => {
        console.log('res :', res);
        this.siteFormCreate.patchValue({
          'name': res.data.name,
          'created_on': res.data.created_on,
          'description': res.data.description,
          'active': res.data.active
        });
      });
    }
  }

  siteFormCreate = new FormGroup({
    'name': new FormControl('', Validators.required),
    'created_on': new FormControl('', Validators.required),
    'description': new FormControl(),
    'active': new FormControl(true)
  })

  siteCreate() {
    if (this.siteFormCreate.valid) {
      this.apiService.createSite(this.siteFormCreate.value).subscribe((res) => {
        console.log('res :', res);
        this.siteFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }

  updateSite() {
    console.log('Form update content :', this.siteFormCreate.value)
    if(this.siteFormCreate.valid)
    {
      this.apiService.updateSite(this.siteFormCreate.value, this.getParamId).subscribe((res)=>{
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
