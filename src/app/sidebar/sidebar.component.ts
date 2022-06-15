import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'app/auth/auth.guard';
import { PeriodePayementComponent } from 'app/pages/periode-payement/periode-payement.component';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' ,},
    { path: '/demo',          title: 'Gestion Demo',  icon:'nc-badge',    class: '' },
    { path: '/allmodules',    title: 'Gestion des Modules',       icon:'nc-layout-11',    class: '' },
    {path:  '/list-prix', title :'Paramètrage des prix' ,icon:'nc-settings-gear-65', class: '' },
    {path:  '/list-periode-payement', title:'Periode Payement',icon:'nc-paper', class: ''},
    {path:  '/list-devis', title:'Gestion des Devis',icon:'nc-money-coins', class: ''},    
    {path:  '/list-achats', title:'Gestion Des Achats ',icon:'nc-chart-bar-32', class: ''},


    //{ path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
   // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    //{ path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    //{ path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    //{ path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
