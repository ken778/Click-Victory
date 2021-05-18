import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenpopPageRoutingModule } from './openpop-routing.module';

import { OpenpopPage } from './openpop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenpopPageRoutingModule
  ],
  declarations: [OpenpopPage]
})
export class OpenpopPageModule {}
