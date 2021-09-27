import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import {ProductspageComponent} from '../components/productspage/productspage.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { TrainingpageComponent } from '../components/trainingpage/trainingpage.component';
import {DeliveriespageComponent} from '../components/deliveriespage/deliveriespage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[

      {
        path: 'deliveriespage', component:  DeliveriespageComponent
      },
      {
        path: 'profile', component:  ProfileComponent
      },
      {
        path: 'productspage', component:  ProductspageComponent
      },
      {
        path: 'trainingpage', component:  TrainingpageComponent
      },
      {
        path: '',
        redirectTo: 'productspage',
        pathMatch: 'full'
      },
     
  
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
