import { Component } from '@angular/core';

@Component({
  selector: 'app-products-outlet',
  template: `
    <h2>Products</h2>
    <div>
      <a routerLink="./product-list">Product list</a>
      <a routerLink="./details">Details</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class ProductsOutletComponent {}
