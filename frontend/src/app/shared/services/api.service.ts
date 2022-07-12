import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../model/api-response.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api';

  constructor(private http: HttpClient) {
  }
  /* *************************************** STATUS ************************************** */
  getAllStatus(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/status/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  /*****************************************************************************************/

  /* *************************************** PERIOD ************************************** */
  createPeriod(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/period/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllPeriodByUserId(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/period/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  /*****************************************************************************************/

  /* **************************************** SITE *************************************** */
  createSite(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/site/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateSite(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/site/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteSite(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/site/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleSite(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/site/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllSite(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/site/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  /*****************************************************************************************/

  /* ************************************ NUMBERPLATE ************************************ */
  createNumberplate(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/numberplate/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleNumberplate(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/numberplate/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateNumberplate(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/numberplate/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteNumberplate(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/numberplate/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllNumberplate(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/numberplate/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  /*****************************************************************************************/

  /* *************************************** USER **************************************** */
  createUser(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/user/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateUser(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/user/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteUser(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/user/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllUser(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/user/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleUser(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/user/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  /*****************************************************************************************/

}
