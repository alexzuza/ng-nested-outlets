import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LayoutOutletComponent  } from './layout-outlet/layout-outlet.component';
import { DashboardModule } from '../feature-components/dashboard/dashboard.module';
import { ProductsModule } from '../feature-components/products/products.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutOutletComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () => DashboardModule
          },
          {
            path: 'products',
            loadChildren: () => ProductsModule
          },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }
    ])
  ],
  declarations: [
    LayoutOutletComponent
  ]
})
export class LayoutModule { }
