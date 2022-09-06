import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  firstName!:string;


  @Output()
  fName: EventEmitter <any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  
  convertToUpperCase(){
    this.fName.emit(this.firstName.toUpperCase());
  }

}
