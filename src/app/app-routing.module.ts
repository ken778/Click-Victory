import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
