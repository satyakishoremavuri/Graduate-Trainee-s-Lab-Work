import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpService } from 'src/app/services/http.service';
import { IEmployee } from './employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnDestroy {
  employees = [] as IEmployee[];
  subscription!:Subscription;
  deptId!:string | null;

  constructor(private http:HttpService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.deptId = this.activatedRoute.snapshot.queryParamMap.get("deptId");
    this.deptId = this.activatedRoute.snapshot.queryParamMap.get("deptId");
    // console.log(this.deptId);
    this.loadEmployees();
  }
   loadEmployees(){
  //   let url = "";
  //   if (this.deptId)
  //      url = "Employee/EmpDetailsByDept?Id=" + this.deptId;
  //    else
  //      url = "Employee";
  //   this.subscription = this.http.getData(url).subscribe({
     this.subscription = this.http.getDataWithParam("Employee/EmpDetailsByDept", this.deptId).subscribe({
      next:(data:any) =>{
        this.employees = data.data as IEmployee[];
        console.log (this.employees)
      },
      error :reason =>console.log(reason)
    });

  }
ngOnDestroy(): void {
  if(this.subscription)
  this.subscription.unsubscribe();
}
}
