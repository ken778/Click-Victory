import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginWithUsernamePage } from './login-with-username.page';

const routes: Routes = [
  {
    path: '',
    component: LoginWithUsernamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginWithUsernamePageRoutingModule {}
