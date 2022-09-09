import { Component, OnInit } from '@angular/core';
import { IEmployee } from './services-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  employees = [] as IEmployee[];



  constructor() { }

  ngOnInit(): void {

  }

}



