import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../model/api-response.interface";
import {map} from "rxjs/operators";
import {NumberplateCreatePayload} from "../../private/numberplate/model/payload/numberplate-create.payload";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api';

  constructor(private http: HttpClient) {
  }

  /* *************************************** STATUS ************************************** */

  createStatus(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/status/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllStatus(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/status/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleStatus(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/status/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteStatus(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/status/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* ************************************** PROVIDER ************************************* */
  createProvider(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/provider/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateProvider(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/provider/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteProvider(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/provider/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleProvider(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/provider/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllProviders(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/provider/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* **************************************** RANK *************************************** */
  createRank(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/rank/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleRank(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/rank/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateRank(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/rank/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteRank(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/rank/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllRank(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/rank/list`)
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
  createNumberplate(payload: NumberplateCreatePayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/numberplate/create`, payload)
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
  /* ************************************* TACHOGRAPH ************************************ */

  createTacho(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/tachograph/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* ************************************* CREDENTIAL ************************************ */

  getUserCredential(username: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/credentials/detail/${username}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  saveUserCredential(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/credentials/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllCredential(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/credentials/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* *************************************** ADDRESS ************************************* */

  getAllAddress(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/address/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* ************************************* VEHICULE ************************************** */

  createVehicule(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/vehicule/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  updateVehicule(data: any, id: any): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}/vehicule/update/${id}`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteVehicule(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/vehicule/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllVehicule(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/vehicule/list`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getSingleVehicule(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/vehicule/detail/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* ************************************* CTRLTECH ************************************** */

  createCtrltech(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/ctrltech/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  deleteCtrltech(id: any): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}/ctrltech/delete/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllCtrltechByVehiculeId(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/ctrltech/findByVehiculeId/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* ************************************ INTERVTECH ************************************* */

  createIntervtech(data: any): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}/intervtech/create`, data)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getAllIntervtechByVehiculeId(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/intervtech/findByVehiculeId/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
  /* **************************************** ADR **************************************** */

  getAllAdrByVehiculeId(id: any): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}/adr/findByVehiculeId/${id}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  /*****************************************************************************************/
}
