import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DemoComponent } from './pages/Demo/demo/demo.component';
import { EditdemoComponent } from './pages/Demo/editdemo/editdemo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddmoduleComponent } from './pages/Modules/addmodule/addmodule.component';
import { ModulesComponent } from './pages/Modules/modules/modules.component';
import { EditmoduleComponent } from './pages/Modules/editmodule/editmodule.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { UserService } from "./Services/user.service";
import { PeriodePayementComponent } from './pages/periode-payement/periode-payement.component';
import { PrixComponent } from './pages/prix/prix.component';
import { ListPeriodePayementComponent } from './pages/periode-payement/list-periode-payement/list-periode-payement.component';
import { ListPrixComponent } from './pages/prix/list-prix/list-prix.component';
import { EditPrixComponent } from './pages/prix/edit-prix/edit-prix.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DemoComponent,
    EditdemoComponent,
    AddmoduleComponent,
    ModulesComponent,
    EditmoduleComponent,
    LoginComponent,
    PeriodePayementComponent,
    PrixComponent,
    ListPeriodePayementComponent,
    ListPrixComponent,
    EditPrixComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
