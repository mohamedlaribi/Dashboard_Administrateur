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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'demo',           component: DemoComponent},
    { path: 'editdemo/:idDemo',component: EditdemoComponent},
    { path: 'addmodule',      component: AddmoduleComponent},
    { path: 'allmodules',     component:ModulesComponent}
];
