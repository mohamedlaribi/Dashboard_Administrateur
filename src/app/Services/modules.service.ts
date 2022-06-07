import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modules } from 'app/Classes/modules';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private httpclient : HttpClient){}

  private addURL="http://localhost:8099/api/modules/add";
  createModule(modules : Modules): Observable<Object>{
    return this.httpclient.post(`${this.addURL}`,modules);
  }

  private getURL="http://localhost:8099/api/modules/getall";
  getModules(): Observable<Modules[]>{
    return this.httpclient.get<Modules[]>(`${this.getURL}`);
  }

  private editURl="http://localhost:8099/api/modules/";
  updatemodule(idmodule : number , modules : Modules): Observable<Object>
  {
    return this.httpclient.put(`${this.editURl}`+idmodule,modules);
  }
  private getbyIdURl="http://localhost:8099/api/modules/";
  getDemoById(idmodule : number) : Observable<Modules>{
    return this.httpclient.get<Modules>(`${this.getbyIdURl}`+idmodule);
  }
  private deleteURL="http://localhost:8099/api/modules/";
  deleteModule(idmodule : number ): Observable<Object>
  {
    return this.httpclient.delete(`${this.deleteURL}`+idmodule);
  }
}
