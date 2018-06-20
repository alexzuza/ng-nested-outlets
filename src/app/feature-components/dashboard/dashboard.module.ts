import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardOutletComponent  } from './dashboard-outlet/dashboard-outlet.component';
import { UserCountComponent } from './user-count/user-count.component';
import { TotalInvoicesComponent } from './total-invoices/total-invoices.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardOutletComponent,
        children: [
          { path: 'user-count', component: UserCountComponent },
          { path: 'total-invoices', component: TotalInvoicesComponent },
        ]
      }
    ])
  ],
  declarations: [
    DashboardOutletComponent,
    UserCountComponent,
    TotalInvoicesComponent
  ]
})
export class DashboardModule { }
