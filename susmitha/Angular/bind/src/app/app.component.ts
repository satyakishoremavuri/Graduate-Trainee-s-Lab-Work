import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName="Susmitha";
  colSpanValue=2;
  lastName:string="Mavuri";
  showMessage(){
  console.log("This is showMessage");

}
  title = 'bind';
}
