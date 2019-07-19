import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './components/suppliers/supplier.component';
import { ModuleRouting } from './data-demo-routing.module';



@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    ModuleRouting
  ]
})
export class DataDemoModule { }
