import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTaskPagePage } from './add-task-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddTaskPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTaskPagePageRoutingModule {}
