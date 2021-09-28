import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PersonaldetailsComponent} from './components/personaldetails/personaldetails.component';
import {FormstepperComponent} from './components/formstepper/formstepper.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {DeliveriespageComponent} from './components/deliveriespage/deliveriespage.component';
import {AdditionalproductsComponent} from './components/additionalproducts/additionalproducts.component';
import {AddproductsComponent} from './components/addproducts/addproducts.component';
import {ProductspageComponent} from './components/productspage/productspage.component';
import {FundspageComponent} from './components/fundspage/fundspage.component';
import { FundsOutComponent } from './components/funds-out/funds-out.component';
import { TrainingpageComponent } from './components/trainingpage/trainingpage.component';
import { TrainingpaymentComponent } from './components/trainingpayment/trainingpayment.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component'
import { HomePageModule } from './home/home.module';
const routes: Routes = [ 
  {
    path: 'personaldetails', component:  PersonaldetailsComponent
  },
  {
    path: 'login', component:  LoginComponent
  },
  {
    path: 'landingpage', component:  LandingpageComponent
  },

  {
    path: 'personaldetails', component:  PersonaldetailsComponent
  },
  {
    path: 'profile', component:  ProfileComponent
  }, 
  {
    path: 'clientprofile', component:  ClientprofileComponent
  },
  {
    path: 'trainingpayment', component:  TrainingpaymentComponent
  },
  {
    path: 'trainingpage', component:  TrainingpageComponent
  },
  
  {
    path: 'addproducts', component:  AddproductsComponent
  },
  {
    path: 'fundspage', component:  FundspageComponent
  },
  {path: 'funds', component: FundsOutComponent},

  {
    path: 'addproducts', component:  AddproductsComponent
  }, 
  {
    path: 'productspage', component:  ProductspageComponent
  },
  {
    path: 'formstepper', component:  FormstepperComponent
  },
  {
    path: 'deliveriespage', component:  DeliveriespageComponent
  },
  {
    path: 'additionalproducts/:ref', component:  AdditionalproductsComponent
  },
  {
    path: 'gallery', component:  GalleryComponent
  },
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
   //canActivate: [AuthGuard],
    // ...canActivate(redirectUnauthorizedToLogin)
     //...canActivate(redirectLoggedInToHome) 
  
  },

  {
    path: 'form-stepper',
    loadChildren: () => import('./pages/form-stepper/form-stepper.module').then( m => m.FormStepperPageModule)
  },  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
