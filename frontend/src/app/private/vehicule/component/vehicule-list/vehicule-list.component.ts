import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "../../../../shared/model";
import {ApiService} from "../../../../shared/services/api.service";
import {Vehicule} from "../../model/vehciule";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehiculesList: Vehicule[] = [];
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllVehicule();
  }

  delete(id: string) {
    this.apiService.deleteVehicule(id).subscribe(
      (response) => (this.successMsg = response.code),
      (error: any) => (this.errorMsg = 'Cet véhicule ne peut être supprimé, car certains éléments lui sont attachés, utilisé l\'option "Véhicule actif? (Oui / Non)" à la place!'),
      () => console.log('Done deleting the vehicule')

    )
    this.getAllVehicule();
  }

  getAllVehicule() {
    this.apiService.getAllVehicule().subscribe((response: ApiResponse) => {
      this.vehiculesList = response.data;
    })
  }
}
