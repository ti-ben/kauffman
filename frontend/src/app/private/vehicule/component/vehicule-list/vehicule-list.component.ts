import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "../../../../shared/model";
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehiculesList: any;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllVehicule();
  }

  delete(id: string) {
    this.apiService.deleteVehicule(id).subscribe((res: ApiResponse) => {
      this.successMsg = res.code;
      this.getAllVehicule();
    })
  }

  getAllVehicule() {
    this.apiService.getAllVehicule().subscribe((response: ApiResponse) => {
      this.vehiculesList = response.data;
    })
  }
}
