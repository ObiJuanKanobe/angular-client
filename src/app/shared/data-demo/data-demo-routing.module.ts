import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';



const routes: Routes = [
  {
    path: '/data-demo',
    component: DemoComponent
  }
];


export const ModuleRouting: ModuleWithProviders =  RouterModule.forChild(routes);
