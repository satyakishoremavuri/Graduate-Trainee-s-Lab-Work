import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  public navigateRoute (routeName:string){
    this.route.navigate(['/' + routeName])
  }

}
