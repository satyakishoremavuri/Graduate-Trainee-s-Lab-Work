import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childUserName!: string;

  @Output()
  capitalCaseUserName: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.childUserName);
  }

  public capitalCase(event: any) {
    this.childUserName = event;
    this.capitalCaseUserName.emit(event);
  }
}
