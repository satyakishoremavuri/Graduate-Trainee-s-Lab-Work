import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';
import { TestClass } from '../services/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "";
  cust: any;

  constructor(private _sampleService: SampleService, private _testService: TestClass) { }

  ngOnInit(): void {
    this.message = this._sampleService.getMessage();
    this.cust = this._testService.getData("Mounika", "Boinapally");
  }

}
