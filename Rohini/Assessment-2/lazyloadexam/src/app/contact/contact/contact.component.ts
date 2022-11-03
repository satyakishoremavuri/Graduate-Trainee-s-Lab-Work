import { Component, OnInit } from '@angular/core';
import { IContact } from './contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactUser = {} as IContact;

  constructor() { }

  ngOnInit(): void {
  }

}
