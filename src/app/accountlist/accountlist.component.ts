import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDetails } from '../account-details';
import { AccountDetailsService } from '../account-details.service';
@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit{
  accounts:AccountDetails[]=[];
  accountdetails:AccountDetails=new AccountDetails();
  constructor(private accountdetailsService:AccountDetailsService){}

  
  ngOnInit(): void {
    this.getallAccounts();
  }
  getallAccounts()
  {
    this.accountdetailsService.getallAccounts().subscribe(data=>{this.accounts=data;});
  }

}
