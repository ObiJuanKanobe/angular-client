import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';
import { ModuleRouting } from './data-demo-routing.module';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    ModuleRouting
  ]
})
export class DataDemoModule { }
