import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ApiResponse} from "../../../../shared/model";
import {User} from "../../model/business/user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList$: User[] = [];
  search?: string;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  delete(id: string): void {
    this.apiService.deleteUser(id).subscribe(
      (res) => (this.successMsg = res.code),
      (error: any) => (this.errorMsg = 'Cet utilisateur ne peut être supprimé, car certains éléments lui sont attachés, utilisé l\'option "Utilisateur actif? (Oui / Non)" à la place!'),
      () => console.log('Done deleting the user')
    )
    this.getAllData();
  }

  getAllData() {
    this.apiService.getAllUser().subscribe((res: ApiResponse) => {
      this.usersList$ = res.data;
    })
  }
}
