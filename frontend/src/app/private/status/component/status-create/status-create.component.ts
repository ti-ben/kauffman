import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.scss']
})
export class StatusCreateComponent implements OnInit {

  formGroup!: FormGroup;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(),
      active: new FormControl(true)
    });
  }

  create() {
    if (this.formGroup.valid) {
      this.apiService.createStatus(this.formGroup.value).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.initForm();
          this.successMsg = response.code;
        }
      })
    } else {
      this.errorMsg = 'All fiels are required';
    }
  }

}
