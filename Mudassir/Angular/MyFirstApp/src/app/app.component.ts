import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

/* Data Binding inAngular :-
1. One way Binding  --> {{}} (string interpolation) --> Model to view
2. Propery Binding  --> []  --> Model to view
3. Event Binding    --> () --> View to Model
4. 2 way Binding    --> [()] --> Model to view & vice-versa
5. Attribute Binding --> [attrib.attributeName] --> Model to view */

firstName = "Sathesh";

callspanvalue =2

  public show(){
    console.log("this is show method");
  }
  lastName:string = "kumar";
// lastName!:string;   //definite 
 showMessage(){
 console.log("This Is show message");
 }





}