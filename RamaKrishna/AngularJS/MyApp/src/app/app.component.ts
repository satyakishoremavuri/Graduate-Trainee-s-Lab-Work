import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'MyApp';

  /*DATA BINDING
  1.One Way Binding -- {{}}(string interpolation) -- Model to view
  2.property Binding-- []--> model to view
  3.event Binding -- ()--> view to model
  4.2 Way Binding -- [{}] -- Model to view & view to model
  5. attribute binding --> [attribute.attributename]-->model to view
  */
  firstname = "Ramakrishna";
  colSpanvalue = 2;
  lastname: string = "sasanala";
  showMessage() {
    console.log("this is show message");
  }

}
