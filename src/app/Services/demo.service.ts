import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demo } from 'app/Classes/demo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private baseURL="http://localhost:8099/api/demo/getall";
  constructor(private httpclient : HttpClient)
   {}

  getDemoList(): Observable<Demo[]>{
      return  this.httpclient.get<Demo[]>(`${this.baseURL}`);
  }

  private getbyIdURl="http://localhost:8099/api/demo/";
  getDemoById(idDemo : number) : Observable<Demo>{
    return this.httpclient.get<Demo>(`${this.getbyIdURl}`+idDemo);
  }

  private editURl="http://localhost:8099/api/demo/";
  updatedemo(idDemo : number , demo : Demo): Observable<Object>
  {
    return this.httpclient.put(`${this.editURl}`+idDemo,demo);
  }

  private deleteURL="http://localhost:8099/api/demo/";
  deleteDemo(idDemo : number ): Observable<Object>
  {
    return this.httpclient.delete(`${this.deleteURL}`+idDemo);
  }
}
