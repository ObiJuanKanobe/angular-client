import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './components/suppliers/supplier.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';



const routes: Routes = [
  {
    path: 'suppliers',
    component: SupplierComponent
  }
];


export const ModuleRouting: ModuleWithProviders =  RouterModule.forChild(routes);
