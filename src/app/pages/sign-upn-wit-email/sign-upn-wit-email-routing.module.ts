import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpnWitEmailPage } from './sign-upn-wit-email.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpnWitEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpnWitEmailPageRoutingModule {}
