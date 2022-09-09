import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from './employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees = [] as IEmployee[];
  optionvalue:number=1;
  empStatus = true;
  checkAllStatus = false;
  employee = {} as IEmployee;



  constructor() { }

  ngOnInit(): void {
    this.employees = [
      { empNumber: 101, empName: 'Susmitha', empSalary: 65000, empAddress: 'Hyderabad', isselected: false },
      { empNumber: 102, empName: 'sai', empSalary: 25000, empAddress: 'Hyderabad', isselected: false },
      { empNumber: 103, empName: 'deepu', empSalary: 85000, isselected: false },
    ];
  }

  public selectTab(val: number) {
    this.optionvalue = val;
  }

  public checkAll() {
    if (this.checkAllStatus) {
      this.employees = this.employees.map((emp) => {
        emp.isselected = true;
        return emp;
      });
    }
    else {
      this.employees = this.employees.map((emp) => {
        emp.isselected = false;
        return emp;
      });
    }
  }

  public checkStatus() {
    let checkedEmployees = this.employees.filter((emp) => {
      if (emp.isselected)
        return emp;
      else
        return null;
    });
    if (checkedEmployees.length == this.employees.length)
      this.checkAllStatus = true;
    else
      this.checkAllStatus = false;
  }
  public addEmployee(f: NgForm) {
    this.employees.push(this.employee);
    alert("Employee Added");
    this.employee = {} as IEmployee;
    f.resetForm();
  }
  }
  