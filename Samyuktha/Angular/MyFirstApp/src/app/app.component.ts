import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName = "Samyuktha";
 colSpanValue =2;
  lastName: string ="Alakanti";

  showMessage(){
    console.log("This is showMessage");
  }
  }

