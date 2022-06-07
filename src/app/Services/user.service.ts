import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pathApi = "http://localhost:8099";
  requestHeader = new HttpHeaders(
    {"No-Auth" : "True" }
  );

  constructor(private httpclient : HttpClient, private userAuthService : UserAuthService) { }
  
  public login(loginData){
    return this.httpclient.post(this.pathApi+"/authenticate",loginData,{headers:this.requestHeader})
  }
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
