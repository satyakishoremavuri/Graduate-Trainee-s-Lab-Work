import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestClass } from 'src/app/services/test';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];
  employee = {} as IEmployee;
  person: any;
  shareddata={} as any

  constructor(private _testService: TestClass) { }

  ngOnInit(): void {
    this.person = this._testService.getData("Anil", "Kumar");
    this.employees = [
      { empNumber: 101, empName: 'Sathesh', empSalary: 85000, empAddress: "Hyderabad" },
      { empNumber: 102, empName: 'Rama', empSalary: 65000, empAddress: "Chennai" },
      { empNumber: 103, empName: 'Krishna', empSalary: 75000, empAddress: "Vijayawada" },
      { empNumber: 104, empName: 'Mohan', empSalary: 55000, empAddress: "Pune" }
    ];

    this.shareddata = {
      data : this.employees,
      isActionrow : true
    }
    console.log(this.shareddata)
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
