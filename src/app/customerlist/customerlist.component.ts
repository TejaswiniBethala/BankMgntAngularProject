import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit
{
  customers:Customer[]=[];
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService){}
  
  ngOnInit(): void {
    this.getCustDetails();
  }
  getCustDetails()
  {
    this.customerService.getCustDetails().subscribe(data=>{this.customers=data;});
  }
}
