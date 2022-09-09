import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "sathesh kumar";
  //userName = { firstName: 'Sathesh', lastName: 'Kumar' };
  //userName = [10, 20, 30, 40, 50];
  //userName = [{ empNumber: 101, empName: 'Sathesh', empSalary: 65000 }, { empNumber: 102, empName: 'Krishna', empSalary: 56000 }];


  public capitalCase(event: any) {
    console.log(event);
    this.userName = event;
  }
}
