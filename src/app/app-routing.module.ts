import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { RequestRepairComponent } from './request-repair/request-repair.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'repair',
    component: RequestRepairComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
