import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/Services/user-auth.service';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService,
    private userAuthService : UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    //console.log("form is submitted");
    //console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        //console.log(response.jwtToken);
        //console.log(response.user.role);

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        const role =response.user.role[0].roleName;
        if(role == 'Admin'){
            this.router.navigate(['/dashboard']);
        }else{
            this.router.navigate(['/']);
        }
      },
      (error)=>{
        console.log(error);
       }
    );
  }

}
