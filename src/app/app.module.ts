import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule, MatProgressBarModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DataDemoModule } from './shared/data-demo/data-demo.module';
import { ModuleRouting } from './shared/data-demo/data-demo-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ModuleRouting,
    DataDemoModule,
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
