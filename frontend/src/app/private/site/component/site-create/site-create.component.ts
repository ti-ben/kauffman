import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss']
})
export class SiteCreateComponent implements OnInit {

  errorMsg: string = '';
  successMsg: string = '';
  formGroup!: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id')

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      created_on: new FormControl(this.currentDate),
      description: new FormControl(null, [Validators.pattern('^[a-zA-Z]+$')]),
      active: new FormControl(true, [Validators.required]),
      road: new FormControl(null, [Validators.pattern('^[a-zA-Z]+$')]),
      num: new FormControl(null, [Validators.pattern('^[0-9]+$')]),
      town: new FormControl(null, [Validators.pattern('^[a-zA-Z]+$')]),
      postal_code: new FormControl(null, [Validators.pattern('^[0-9]+$')]),
      country: new FormControl(null, [Validators.pattern('^[a-zA-Z]+$')])
    });
  }

  create() {
    if (this.formGroup.valid) {
      this.formGroup.value.address = {
        address_id: null,
        road: this.formGroup.value.road,
        num: this.formGroup.value.num,
        town: this.formGroup.value.town,
        postal_code: this.formGroup.value.postal_code,
        country: this.formGroup.value.country
      }
      this.apiService.createSite(this.formGroup.value).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.initForm();
          this.successMsg = response.code;
        }
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }
}
