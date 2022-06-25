import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api';

  constructor(private http:HttpClient) { }

  getAllSite():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/site/list`);
  }

  createSite(data:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/site/create`, data);
  }

  getSingleSite(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/site/detail/${id}`)
  }

  updateSite(data:any, id:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/site/update/${id}`, data)
  }

  deleteSite(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/site/delete/${id}`);
  }

}
