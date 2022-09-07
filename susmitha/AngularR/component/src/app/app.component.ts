import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';


  constructor(private router: Router) {
  }

  public navigateRoute(routeName: string) {
    this.router.navigate(['/' + routeName]);
  }

  public activateRoute() {
    
  }
}
