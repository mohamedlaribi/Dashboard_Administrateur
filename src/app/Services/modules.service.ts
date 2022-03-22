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


  

}
