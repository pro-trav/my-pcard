import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { CardLimitComponent } from './card-limit/card-limit.component';
import { CardPermissionsComponent } from './card-permissions/card-permissions.component';

export const childRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'My Profile' },
  },
  {
    path: 'card-limit',
    component: CardLimitComponent,
    data: { title: 'Card Limit' },
  },
  {
    path: 'card-permissions',
    component: CardPermissionsComponent,
    data: { title: 'Card Permissions' },
  },
];
@NgModule({
  declarations: [HomeComponent, CardLimitComponent, CardPermissionsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: childRoutes[0].path,
          },
          ...childRoutes,
        ],
      },
    ]),
  ],
})
export class ManagementModule {}
