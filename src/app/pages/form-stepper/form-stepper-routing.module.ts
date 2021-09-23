import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormStepperPage } from './form-stepper.page';

const routes: Routes = [
  {
    path: '',
    component: FormStepperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormStepperPageRoutingModule {}
