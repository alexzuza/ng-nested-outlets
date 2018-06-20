import { NgModule } from '@angular/core';



import { RouterModule } from '@angular/router';
import { ProductsOutletComponent } from './products-outlet/products-outlet.component';
import { DetailsComponent } from './details/details.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    RouterModule.forChild(
      [{
        path: '',
        component: ProductsOutletComponent,
        children: [
          { path: 'product-list', component: ProductListComponent },
          { path: 'details', component: DetailsComponent },
          { path: '', redirectTo: 'product-list', pathMatch: 'full'}
        ]
      }]
    )
  ],
  declarations: [
    ProductsOutletComponent,
    ProductListComponent,
    DetailsComponent
  ],
})
export class ProductsModule { }
