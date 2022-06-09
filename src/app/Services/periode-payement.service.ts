import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodePayementService {

  constructor(private httpclient : HttpClient) { }

  private addURL="http://localhost:8099/api/PeriodePayement/add";
  createPpayement(pPayement : PeriodePayement): Observable<Object>{
    return this.httpclient.post(`${this.addURL}`,pPayement);
  }

  private getURL="http://localhost:8099/api/PeriodePayement/getall";
  getall(): Observable<PeriodePayement[]>{
    return this.httpclient.get<PeriodePayement[]>(`${this.getURL}`);
  }

  private deleteURL="http://localhost:8099/api/PeriodePayement/";
  delete(idPeriodePayement : number ): Observable<Object>
  {
    return this.httpclient.delete(`${this.deleteURL}`+idPeriodePayement);
  }
  private editURl="http://localhost:8099/api/PeriodePayement";
  updatePeriode(idPeriodePayement : number , pPayement : PeriodePayement): Observable<Object>
  {
    return this.httpclient.put(`${this.editURl}`+idPeriodePayement,pPayement);
  }
  private getbyIdURl="http://localhost:8099/api/PeriodePayement";
  getById(idPeriodePayement : number) : Observable<PeriodePayement>{
    return this.httpclient.get<PeriodePayement>(`${this.getbyIdURl}`+idPeriodePayement);
  }
}
