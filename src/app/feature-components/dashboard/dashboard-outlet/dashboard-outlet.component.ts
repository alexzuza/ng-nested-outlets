import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-outlet',
  template: `
    <h2>Welcome to Dashboard!</h2>
    <div>
      <a routerLink="./user-count">User count</a>
      <a routerLink="./total-invoices">Total invoices</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class DashboardOutletComponent {}
