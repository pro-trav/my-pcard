import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PendingComponent } from './pending/pending.component';
import { HistoryComponent } from './history/history.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const childRoutes: Routes = [
  {
    path: 'pending',
    component: PendingComponent,
    data: { title: 'Pending Transactions' },
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'Historical Transactions' },
  },
];
@NgModule({
  declarations: [HomeComponent, PendingComponent, HistoryComponent],
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
export class TransactionsModule {}
