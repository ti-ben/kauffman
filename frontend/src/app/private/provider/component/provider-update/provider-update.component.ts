import {Component, OnInit, Provider} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.scss']
})
export class ProviderUpdateComponent implements OnInit {

  formGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  rProvider: Provider[] = [];
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.apiService.getSingleProvider(this.getParamId).subscribe((response: ApiResponse) => {
      this.formGroup = new FormGroup({
        provider_id: new FormControl(response.data.provider_id),
        name: new FormControl(response.data.name),
        phone: new FormControl(response.data.phone),
        email: new FormControl(response.data.email),
        active: new FormControl(response.data.active),
        service: new FormControl(response.data.service),
        address_id: new FormControl(response.data.address.address_id),
        road: new FormControl(response.data.address.road),
        num: new FormControl(response.data.address.num),
        town: new FormControl(response.data.address.town),
        postal_code: new FormControl(response.data.address.postal_code),
        country: new FormControl(response.data.address.country)
      })
    })
  }

  update(): void {
    console.log(this.formGroup.value)
    if (this.formGroup.valid) {
      this.formGroup.value.address = {
        address_id: this.formGroup.value.address_id,
        road: this.formGroup.value.road,
        num: this.formGroup.value.num,
        town: this.formGroup.value.town,
        postal_code: this.formGroup.value.postal_code,
        country: this.formGroup.value.country,
      }
      this.apiService.updateProvider(this.formGroup.value).subscribe((res) => {
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }
  }
}
