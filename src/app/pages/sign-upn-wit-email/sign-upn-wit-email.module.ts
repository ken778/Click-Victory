import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpnWitEmailPageRoutingModule } from './sign-upn-wit-email-routing.module';

import { SignUpnWitEmailPage } from './sign-upn-wit-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpnWitEmailPageRoutingModule
  ],
  declarations: [SignUpnWitEmailPage]
})
export class SignUpnWitEmailPageModule {}
