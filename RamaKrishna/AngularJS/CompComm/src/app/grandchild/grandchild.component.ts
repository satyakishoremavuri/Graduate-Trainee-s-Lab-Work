import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input()
  grandChildUserName!: string;

  @Output()
  capitalCaseUserName: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public convertToUpper() {
    this.capitalCaseUserName.emit(this.grandChildUserName.toUpperCase());
  }
}
