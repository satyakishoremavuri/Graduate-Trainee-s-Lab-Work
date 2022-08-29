import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee-module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees =[] as IEmployee[];
  optionValue: number = 1;
  empStatus = true;
  checkAllStatus=false;
  constructor() { }

  ngOnInit(): void {
    this.employees = [
      { empNumber:101, empName:'samyuktha',empSalary: 65000,empAddress:'Hyderabad', isSelected:false},
      { empNumber:102, empName:'sahithi',empSalary: 30000,empAddress:'Hyderabad' ,isSelected:false},
      { empNumber:103, empName:'sambhav',empSalary: 48000 ,isSelected:false},
      { empNumber:104, empName:'karthik',empSalary: 55000,empAddress:'Hyderabad',isSelected:false},
      { empNumber:105, empName:'bhavish',empSalary: 95000,isSelected:false},
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
