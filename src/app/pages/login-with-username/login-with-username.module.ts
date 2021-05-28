import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWithUsernamePageRoutingModule } from './login-with-username-routing.module';

import { LoginWithUsernamePage } from './login-with-username.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginWithUsernamePageRoutingModule
  ],
  declarations: [LoginWithUsernamePage]
})
export class LoginWithUsernamePageModule {}
