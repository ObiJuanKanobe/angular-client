import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './components/suppliers/supplier.component';
import { ModuleRouting } from './data-demo-routing.module';
import { AppModule } from 'src/app/app.module';
import { MatTableModule } from '@angular/material';
import { CdkCell, CdkColumnDef } from '@angular/cdk/table';



@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    ModuleRouting,
    MatTableModule,
  ]
})
export class DataDemoModule { }
