import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './Services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(     
    private userAuthService : UserAuthService,
    private router : Router) {}

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
  
}


