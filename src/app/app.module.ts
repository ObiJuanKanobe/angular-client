import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule, MatProgressBarModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DataDemoModule } from './shared/data-demo/data-demo.module';
import { ModuleRouting } from './shared/data-demo/data-demo-routing.module';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    DataDemoModule,
    ModuleRouting,
    MatProgressBarModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    routing,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
