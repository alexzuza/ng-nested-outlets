import { NgModule } from '@angular/core';


import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { AccountOutletComponent } from './account-outlet/account-outlet.component';

@NgModule({
  imports: [
    RouterModule.forChild(
      [{
        path: 'account', component: AccountOutletComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
      }]
    )
  ],
  declarations: [
    AccountOutletComponent,
    LoginComponent
  ],
})
export class AccountModule { }
