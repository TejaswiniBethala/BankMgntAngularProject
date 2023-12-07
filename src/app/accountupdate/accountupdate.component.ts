import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDetails } from '../account-details';
import { AccountDetailsService } from '../account-details.service';
@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit
 {
  accountdetails:AccountDetails=new AccountDetails();
  msg:any="";

  constructor(private accountdetailsService:AccountDetailsService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  AccountUpdate()
  {
    this.accountdetailsService.updateAccount(this.accountdetails).subscribe(data=>{this.msg=data;});
  }

}
