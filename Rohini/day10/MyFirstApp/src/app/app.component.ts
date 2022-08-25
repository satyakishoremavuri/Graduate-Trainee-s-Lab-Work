import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  firstName = "sathesh";
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




