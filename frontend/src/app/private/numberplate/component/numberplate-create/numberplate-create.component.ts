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
  successMsg: string = '';
  getParamId = this.activatedRoute.snapshot.paramMap.get('id');
  sitesList: Site[] = [];
  formGroup!: FormGroup;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSitesList();
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      'site_id': new FormControl(),
      'num_plate': new FormControl('', Validators.required),
      'dop': new FormControl(''),
      'active': new FormControl(true)
    });

  }

  create(): void {
    if (this.formGroup.valid) {
      const payload: NumberplateCreatePayload = this.formGroup.value;
      this.apiService.createNumberplate(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
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
