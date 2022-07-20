import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-numberplate-list',
  templateUrl: './numberplate-list.component.html',
  styleUrls: ['./numberplate-list.component.scss']
})
export class NumberplateListComponent implements OnInit {

  readData: any;
  successMsg:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  delete(id:any)
  {
    this.apiService.deleteNumberplate(id).subscribe((res)=> {
      this.successMsg = res.code;
      this.getAllData();
    })
  }

  getAllData()
  {
    this.apiService.getAllNumberplate().subscribe((res)=> {
      this.readData = res.data;
    })
  }

}
