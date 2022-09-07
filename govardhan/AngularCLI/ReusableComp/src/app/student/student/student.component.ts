import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student-model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [] as IStudent[];


  constructor() { }

  ngOnInit(): void {
    this.students = [
      {studRoll:1001, studName: 'Govardhan', studAge:22, studAddress:'Hyderabad' },
      {studRoll:1002, studName: 'Rama Krishna', studAge:25, studAddress:'Vijayawada' },
      {studRoll:1003, studName: 'Girirsh', studAge:20, studAddress:'Khammam' },
      {studRoll:1004, studName: 'Santosh', studAge:21, studAddress:'Bangalore' },
      {studRoll:1005, studName: 'Rohini', studAge:23, studAddress:'Ranga Reddy' }

    ]
  }

}
