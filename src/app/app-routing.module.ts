import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { ApplicationComponent} from './application/application.component';
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
  ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'apply',
    component: ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
