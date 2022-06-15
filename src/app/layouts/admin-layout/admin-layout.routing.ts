import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { DemoComponent } from 'app/pages/Demo/demo/demo.component';
import { EditdemoComponent } from 'app/pages/Demo/editdemo/editdemo.component';
import { Component } from '@angular/core';
import { AddmoduleComponent } from 'app/pages/Modules/addmodule/addmodule.component';
import { ModulesComponent } from 'app/pages/Modules/modules/modules.component';
import { EditmoduleComponent } from 'app/pages/Modules/editmodule/editmodule.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { PeriodePayementComponent } from 'app/pages/periode-payement/periode-payement.component';
import { PrixComponent } from 'app/pages/prix/prix.component';
import { ListPeriodePayementComponent } from 'app/pages/periode-payement/list-periode-payement/list-periode-payement.component';
import { ListPrixComponent } from 'app/pages/prix/list-prix/list-prix.component';
import { EditPrixComponent } from 'app/pages/prix/edit-prix/edit-prix.component';
import { ForbiddenComponent } from 'app/pages/forbidden/forbidden.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { AchatsComponent } from 'app/pages/achats/achats.component';
import { DevisComponent } from 'app/pages/devis/devis.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthGuard],data:{roles:['Admin']} },
    { path: 'periode-payement', component: PeriodePayementComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'parametrage-prix', component: PrixComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'demo',           component: DemoComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'editdemo/:idDemo',component: EditdemoComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'addmodule',      component: AddmoduleComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'allmodules',     component:ModulesComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'editmodule/:idmodule',component: EditmoduleComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'list-periode-payement' , component: ListPeriodePayementComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'list-prix', component:ListPrixComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'edit-prix/:idPrix',component: EditPrixComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    { path: 'edit-periode/:idPeriodePayement', component: PeriodePayementComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    {path: 'acces-interdit', component: ForbiddenComponent},
    {path: 'list-devis', component : DevisComponent},
    {path: 'list-achats', component: AchatsComponent,canActivate:[AuthGuard],data:{roles:['Admin']}}
];
