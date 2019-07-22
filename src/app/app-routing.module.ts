import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
  {path: '', redirectTo: '/suppliers', pathMatch: 'full'},
  {path: 'Supplier', loadChildren: './shared/data-demo/data-demo.module#DataDemoModule'},
];

export const routing: ModuleWithProviders =  RouterModule.forChild( routes );
