import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    EmployeeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
