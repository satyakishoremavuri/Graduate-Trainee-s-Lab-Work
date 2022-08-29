import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];
  optionValue!: number;
  empStatus=true;
  checkAllStatus=false;
  employee = {} as IEmployee;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {empNumber:101,empName:'Sathesh',empSalary:65000,empAddress:'Hyderabad',isSelected:false},
      {empNumber:102,empName:'Sai',empSalary:55000,empAddress:'Hyderabad',isSelected:false},
      {empNumber:103,empName:'Mohan',empSalary:25000,empAddress:'Hyderabad',isSelected:false},
      {empNumber:104,empName:'Krishna',empSalary:65000,empAddress:'Hyderabad',isSelected:false},
      {empNumber:105,empName:'Suman',empSalary:45000,isSelected:false}


    ];
  }
  public selectTab(val:number){
    this.optionValue = val;
  }
  public checkAll(){
    if (this.checkAllStatus) {
      this.employees = this.employees.map((emp) => {
        emp.isSelected = true;
        return emp;
      });
    }
    else {
      this.employees = this.employees.map((emp) => {
        emp.isSelected = false;
        return emp;
      });
    }
  }

  public checkStatus() {
    let checkedEmployees = this.employees.filter((emp) => {
      if (emp.isSelected)
        return emp;
      else
        return null;
    });
    if (checkedEmployees.length == this.employees.length)
      this.checkAllStatus = true;
    else
      this.checkAllStatus = false;
  }
}

