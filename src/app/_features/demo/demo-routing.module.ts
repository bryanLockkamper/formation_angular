import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { Demo1Component } from './_components/demo1/demo1.component';
import { Demo2Component } from './_components/demo2/demo2.component';
import { Demo3Component } from './_components/demo3/demo3.component';
import { Demo4Component } from './_components/demo4/demo4.component';
import { Demo5Component } from './_components/demo5/demo5.component';
import { Demo6Component } from './_components/demo6/demo6.component';
import { Demo7Component } from './_components/demo7/demo7.component';
import { Demo8Component } from './_components/demo8/demo8.component';
import { Demo9Component } from './_components/demo9/demo9.component';

const routes: Routes = [
  { path: '', component: DemoComponent, children: [
    { path: 'demo1', component: Demo1Component },
    { path: 'demo2', component: Demo2Component },
    { path: 'demo3', component: Demo3Component },
    { path: 'demo4', component: Demo4Component },
    { path: 'demo5', component: Demo5Component },
    { path: 'demo6', component: Demo6Component },
    { path: 'demo7', component: Demo7Component },
    { path: 'demo8', component: Demo8Component },
    { path: 'demo9', component: Demo9Component },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
