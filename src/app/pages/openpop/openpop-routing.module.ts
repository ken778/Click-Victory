import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenpopPage } from './openpop.page';

const routes: Routes = [
  {
    path: '',
    component: OpenpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenpopPageRoutingModule {}
