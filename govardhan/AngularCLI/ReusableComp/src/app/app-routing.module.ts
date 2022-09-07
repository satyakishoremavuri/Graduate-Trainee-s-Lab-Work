import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', loadChildren: () => import("./employee/employee.module").then(x => x.EmployeeModule) },
  { path: 'customer', loadChildren: () => import("./customer/customer.module").then(x => x.CustomerModule) },
  { path: 'student', loadChildren: () => import("./student/student.module").then(x => x.StudentModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
