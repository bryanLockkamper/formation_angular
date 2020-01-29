import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExComponent } from './ex.component';
import { Ex1Component } from './_components/ex1/ex1.component';
import { Ex2Component } from './_components/ex2/ex2.component';
import { Ex3Component } from './_components/ex3/ex3.component';
import { Ex4Component } from './_components/ex4/ex4.component';

const routes: Routes = [{ path: '', component: ExComponent, children: [
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExRoutingModule { }
