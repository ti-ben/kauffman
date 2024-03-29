import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NumberplateCreatePayload} from "../../model/payload/numberplate-create.payload";
import {ApiResponse} from "../../../../shared/model";
import {Site} from "../../../site/model/site";

@Component({
  selector: 'app-numberplate-create',
  templateUrl: './numberplate-create.component.html',
  styleUrls: ['./numberplate-create.component.scss']
})
export class NumberplateCreateComponent implements OnInit {

  errorMsg: string = '';
  formGroup!: FormGroup;
  sitesList: Site[] = [];
  successMsg: string = '';
  currentDate = new Date().toISOString().substring(0, 10);
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSitesList();
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      site: new FormControl(),
      num_plate: new FormControl('', Validators.required),
      dop: new FormControl(this.currentDate),
      active: new FormControl(true)
    });

  }

  create(): void {
    if (this.formGroup.valid) {
      const payload: NumberplateCreatePayload = this.formGroup.value;
      this.formGroup.value.site = {site_id: payload.site}
      console.log(payload)
      this.apiService.createNumberplate(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.initForm();
          this.successMsg = response.code;
        }
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
