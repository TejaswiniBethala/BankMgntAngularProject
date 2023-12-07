import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit
{
  constructor(private customerService:CustomerService){}
  customer:Customer=new Customer();
  msg:any="";

  ngOnInit(): void {
    throw new Error('Method not Implemented');
  }
  addcustomer()
  {
    this.customerService.saveCustomer(this.customer).subscribe(data=>{this.msg=data;});
  }
}
