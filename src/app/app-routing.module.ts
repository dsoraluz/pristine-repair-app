import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestRepairComponent } from './request-repair/request-repair.component'

const routes: Routes = [
  {
    path: '',
    component: RequestRepairComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
