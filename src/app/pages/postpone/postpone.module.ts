import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostponePageRoutingModule } from './postpone-routing.module';

import { PostponePage } from './postpone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostponePageRoutingModule
  ],
  declarations: [PostponePage]
})
export class PostponePageModule {}
