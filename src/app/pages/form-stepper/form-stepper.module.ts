import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormStepperPageRoutingModule } from './form-stepper-routing.module';

import { FormStepperPage } from './form-stepper.page';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormStepperPageRoutingModule,
    MatStepperModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  declarations: [FormStepperPage]
})
export class FormStepperPageModule {}
