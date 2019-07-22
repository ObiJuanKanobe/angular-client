import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
  {path: '', redirectTo: '/data-demo', pathMatch: 'full'},
  {path: 'DataDemo', loadChildren: './shared/data-demo/data-demo.module#DataDemoModule'},
];

export const routing: ModuleWithProviders =  RouterModule.forChild( routes );
