import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-tachograph',
  templateUrl: './user-tachograph.component.html',
  styleUrls: ['./user-tachograph.component.scss']
})
export class UserTachographComponent implements OnInit {

  errorMsg: any;
  successMsg: any;
  getParamId: any = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  tachographFormCreate = new FormGroup({
    'start_date': new FormControl('', Validators.required),
    'end_date': new FormControl('', Validators.required),
    'num_carte': new FormControl('', Validators.required),
    'description': new FormControl('')
  })

  tachographCreate() {
    console.log('Form data = ', this.tachographFormCreate.value)/*
    if (this.tachographFormCreate.valid) {
      this.apiService.createTacho(this.tachographFormCreate.value).subscribe((res) => {
        this.tachographFormCreate.reset();
        this.successMsg = res.code;
      })
    } else {
      this.errorMsg = 'All fields are required';
    }*/
  }

}
