import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestClass } from 'src/app/service/test';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
 
})
export class EmployeeComponent implements OnInit {
  employees = [] as IEmployee[];
  employee = {} as IEmployee;
  person:any;

  constructor(private _testService: TestClass) { }

  ngOnInit(): void {
    this.person=this._testService.getData();
    this.employees=[
      {empNumber:101,empName:'sathesh',empSalary:85000,empAddress:'Hyderabad'},
      {empNumber:102,empName:'mohan',empSalary:75000,empAddress:'Chennai'},
      {empNumber:103,empName:'krishna',empSalary:65000,empAddress:'Vijayawada'},
      {empNumber:104,empName:'Rama',empSalary:55000,empAddress:'Pune'},
      {empNumber:105,empName:'anil',empSalary:45000,empAddress:'Hyderabad'}
    ]
  }
  public addEmployee(f: NgForm) {

  }
  public selectEmployee(emp: any) {
    this.employee = JSON.parse(JSON.stringify(emp));
  }
  public deleteEmployee(emp: any) {
    let pos = this.employees.indexOf(emp);
    if (pos >= 0) {
      if (confirm("Do you want to delete?")) {
        this.employees.splice(pos, 1);
        alert("Employee Deleted");
      }
    }
  }

}
