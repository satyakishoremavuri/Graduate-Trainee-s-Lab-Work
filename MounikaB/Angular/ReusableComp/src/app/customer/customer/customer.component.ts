import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [] as ICustomer[];
  customer = {} as ICustomer;
  custFormGroup!: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customers = [
      { custNumber: 1, custName: 'Mounika', custAmount: 6500, custAddress: 'Chennai' },
      { custNumber: 2, custName: 'Hira', custAmount: 5500, custAddress: 'Hyderabad' },
      { custNumber: 3, custName: 'Divya', custAmount: 4500, custAddress: 'Pune' },
      { custNumber: 4, custName: 'Mohan', custAmount: 2500, custAddress: 'Chennai' }
    ];
    this.custFormGroup = this._formBuilder.group({
      custNumber: [null, Validators.required],
      custName: [null, Validators.required],
      custAmount: [null, Validators.required],
      custAddress: [null]
    });

  }


  public get f() {
    return this.custFormGroup.controls;
  }


  public addCustomer() {
    this.submitted = true;
    if (this.custFormGroup.invalid)
      return;
  }

  public selectCust(cust: any) {
    this.custFormGroup.patchValue(cust);
  }

  public deleteCustomer(cust: any) {
    let pos = this.customers.indexOf(cust);
    if (pos >= 0) {
      this.customers.splice(pos, 1);
      alert("Customer Deleted");
    }
  }
}
