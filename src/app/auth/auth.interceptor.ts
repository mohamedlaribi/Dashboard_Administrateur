import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserAuthService } from "app/Services/user-auth.service";
import { Observable, throwError } from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private userAuthService : UserAuthService,
    private router : Router ){}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): 
        Observable<HttpEvent<any>> {

        if(req.headers.get("No-Auth")==="True"){
            return next.handle(req.clone());
        }
        const token = this.userAuthService.getToken();
        req = this.addtoken(req,token);
        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse)=>{
                    console.log(err.status);
                    if(err.status === 401){
                        this.router.navigate(['/login']);
                    }else if(err.status === 403){
                        this.router.navigate(['/acces-interdit'])
                    }
                    return throwError("Some thing is wrong");
                }
            )
        );
    }
    private addtoken(request : HttpRequest<any>,token:string){
        return request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }
    
}