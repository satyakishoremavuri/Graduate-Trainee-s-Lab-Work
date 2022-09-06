import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];
  optionValue: number = 1;
  empStatus = true;
  checkAllStatus=false;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
    { empNumber: 101, empName: 'Sathesh', empSalary:65000, empAddress: 'Hyd',isSelected:false},
    { empNumber: 102, empName: 'Rajesh',  empSalary:25000, empAddress: 'Hyd',isSelected:false},
    { empNumber: 103, empName: 'Mallesh', empSalary:85000,isSelected:false},
    { empNumber: 104, empName: 'Suyesh',  empSalary:41000, empAddress: 'Hyd',isSelected:false},
    { empNumber: 105, empName: 'Jithesh', empSalary:13000,isSelected:false}
    ];
  }
  public selectTab(val: number){
    this.optionValue = val;
   }
   public checkAll(){
    if(this.checkAllStatus){
      this.employees = this.employees.map((emp)) => emp.isSelected = true);
    }
   }
}
