import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthService } from 'app/Services/user-auth.service';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {

constructor(private userAuthService : UserAuthService,private router : Router){}

    public  isLoggedIn(){
        return this.userAuthService.isLoggedIn();
    }
    
    public logout(){
        this.userAuthService.clear();
        this.router.navigate(['/login']);
    }
}
