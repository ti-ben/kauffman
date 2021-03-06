import { Component, OnInit } from '@angular/core';
import {ApiResponse} from "../../../../shared/model";
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehiculesList: any;
  successMsg:string = '';
  errorMsg: string = '';

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllVehicule();
  }

  getAllVehicule()
  {
    this.apiService.getAllVehicule().subscribe((res: ApiResponse)=> {
      console.log('Vehicule list => ', res)
      this.vehiculesList = res.data;
    })
  }

  delete(id:string){

  }
}
