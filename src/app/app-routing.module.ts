import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PersonaldetailsComponent} from './components/personaldetails/personaldetails.component'
import {FormstepperComponent} from './components/formstepper/formstepper.component'
import {GalleryComponent} from './components/gallery/gallery.component'
import {DeliveriespageComponent} from './components/deliveriespage/deliveriespage.component'
import {AdditionalproductsComponent} from './components/additionalproducts/additionalproducts.component'
import {AddproductsComponent} from './components/addproducts/addproducts.component'
import {ProductspageComponent} from './components/productspage/productspage.component'
const routes: Routes = [
  {
    path: 'personaldetails', component:  PersonaldetailsComponent
  },
  {
    path: 'addproducts', component:  AddproductsComponent
  },
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
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePagePageModule
      ),
  },
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPagePageModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'sign-upn-wit-email',
    loadChildren: () =>
      import('./pages/sign-upn-wit-email/sign-upn-wit-email.module').then(
        (m) => m.SignUpnWitEmailPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'add-task-page',
    loadChildren: () =>
      import('./pages/add-task-page/add-task-page.module').then(
        (m) => m.AddTaskPagePageModule
      ),
  },
  {
    path: 'task-details',
    loadChildren: () =>
      import('./pages/task-details/task-details.module').then(
        (m) => m.TaskDetailsPageModule
      ),
  },
  {
    path: 'detailed/:ref',
    loadChildren: () =>
      import('./pages/detailed/detailed.module').then(
        (m) => m.DetailedPageModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./pages/applications/applications.module').then( m => m.ApplicationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'openpop',
    loadChildren: () => import('./pages/openpop/openpop.module').then( m => m.OpenpopPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'postpone/:ref',
    loadChildren: () => import('./pages/postpone/postpone.module').then( m => m.PostponePageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'login-with-username',
    loadChildren: () => import('./pages/login-with-username/login-with-username.module').then( m => m.LoginWithUsernamePageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./pages/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./pages/complete-profile/complete-profile.module').then( m => m.CompleteProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'form-stepper',
    loadChildren: () => import('./pages/form-stepper/form-stepper.module').then( m => m.FormStepperPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
