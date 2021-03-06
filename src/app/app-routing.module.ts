import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    // component: NotFoundComponent
  },
  {
    path: 'home',
    loadChildren: './feature/feature.module#FeatureModule'
  },
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  {
    path: '**',
    redirectTo: 'home'
    // component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
