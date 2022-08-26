import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 FirstName="poorna";
 //public show(){
  //console.log("this is show method");
  lastName: string = "sai";
 
 showMessage(){
  console.log("this is showmessage");

 }
 colSpanValue=2;
//}
}