import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prix } from 'app/Classes/prix';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrixService {

  constructor(private httpclient : HttpClient) { }

  private addURL="http://localhost:8099/api/prix/add";
  createPrix(prix : Prix): Observable<Object>{
    return this.httpclient.post(`${this.addURL}`,prix);
  }
  private getURL="http://localhost:8099/api/prix/getall";
  getAllPrix(): Observable<Prix[]>{
    return this.httpclient.get<Prix[]>(`${this.getURL}`);
  }
  private deleteURL="http://localhost:8099/api/prix/";
  deletePrix(idp : number ): Observable<Object>
  {
    return this.httpclient.delete(`${this.deleteURL}`+idp);
  }
   private editURl="http://localhost:8099/api/prix/";
  updatePrix(idPrix : number , prix : Prix): Observable<Object>
  {
    return this.httpclient.put(`${this.editURl}`+idPrix,prix);
  }
  private getbyIdURl="http://localhost:8099/api/prix/";
  getPrixById(idPrix : number) : Observable<Prix>{
    return this.httpclient.get<Prix>(`${this.getbyIdURl}`+idPrix);
  }
  
}
