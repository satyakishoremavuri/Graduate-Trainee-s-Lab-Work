import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'customer',component:CustomerComponent}
]

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

