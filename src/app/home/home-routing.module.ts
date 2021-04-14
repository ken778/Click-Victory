import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'home-page',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/home-page/home-page.module').then( m => m.HomePagePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full'
      },
     
      {
        path:'applications',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/applications/applications.module').then( m => m.ApplicationsPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
