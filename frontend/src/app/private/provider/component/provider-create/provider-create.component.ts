import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../../../shared/model";
import {ProviderCreatePayload} from "../../model/payload/provider-create.payload";

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.scss']
})
export class ProviderCreateComponent implements OnInit {

  formGroup!: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      address_id: new FormControl(''),
      active: new FormControl(true),
      road: new FormControl(null),
      num: new FormControl(null),
      town: new FormControl(null),
      postal_code: new FormControl(null),
      country: new FormControl(null)
    });
  }

  create() {
    if (this.formGroup.valid) {
      const payload: ProviderCreatePayload = this.formGroup.value;
      this.formGroup.value.address = {
        address_id: null,
        road: this.formGroup.value.road,
        num: this.formGroup.value.num,
        town: this.formGroup.value.town,
        postal_code: this.formGroup.value.postal_code,
        country: this.formGroup.value.country
      }
      this.apiService.createProvider(payload).subscribe((response: ApiResponse) => {
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
