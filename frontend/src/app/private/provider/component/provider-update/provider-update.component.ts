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

  pFormGroup!: FormGroup;
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  rProvider: Provider[] = [];
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.apiService.getSingleProvider(this.getParamId).subscribe((response: ApiResponse) => {
      this.pFormGroup = new FormGroup({
        provider_id: new FormControl(response.data.provider_id),
        name: new FormControl(response.data.name),
        phone: new FormControl(response.data.phone),
        email: new FormControl(response.data.email),
        active: new FormControl(response.data.active),
        address_id: new FormControl(response.data.address_id),
        service: new FormControl(response.data.service)
      })
    })
  }

  update(): void {
    console.log(this.pFormGroup.value);
  }
}
