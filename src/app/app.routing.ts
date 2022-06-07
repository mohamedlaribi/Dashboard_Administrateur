import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

  export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    }, {
      path: '',
      component: LoginComponent,
    },
    {
      path: '**',
      redirectTo: 'login'
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]},
   // { path:'forbidden', component : ForbiddenComponent}

  ]
  