import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskPagePageRoutingModule } from './add-task-page-routing.module';

import { AddTaskPagePage } from './add-task-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTaskPagePageRoutingModule
  ],
  declarations: [AddTaskPagePage]
})
export class AddTaskPagePageModule {}
