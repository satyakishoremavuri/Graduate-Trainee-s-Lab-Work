import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    firstName = "Mounika";

    public show() {
        console.log("This is show method");
    }


}
