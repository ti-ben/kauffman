import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ApiResponse} from "../../shared/model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  selectmedList: any = '';
  metrologyList: any = '';
  intervtechList: any = '';
  capList: any = '';
  today: number = new Date().getTime();

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCapList();
    this.getMetrologyList();
    this.getSelectMedList();
    this.getIntervtechList();
  }

  getSelectMedList() {
    this.apiService.getAllSelectMed().subscribe((response: ApiResponse) => {
      this.selectmedList = response.data;
    });
  }

  getCapList() {
    this.apiService.getAllCap().subscribe((response: ApiResponse) => {
      this.capList = response.data;
    });
  }

  getIntervtechList() {
    this.apiService.getAllIntervtech().subscribe((response: ApiResponse) => {
      this.intervtechList = response.data;
    });
  }

  getMetrologyList() {
    this.apiService.getAllIntervtech().subscribe((response: ApiResponse) => {
      this.metrologyList = response.data;
    });
  }

}
