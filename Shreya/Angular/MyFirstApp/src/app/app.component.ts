import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName = "Shreya";
  colSpanValue = 2;
  lastName: string = "Tr";
  title: any;
  showMessage() {
    console.log("This is a show message");
  }


}
