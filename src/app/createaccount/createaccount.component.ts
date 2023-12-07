import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AccountDetails } from '../account-details';
import { AccountDetailsService } from '../account-details.service';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit
{

  constructor(private accountdetailsService:AccountDetailsService){}
  accountdetails:AccountDetails=new AccountDetails();
  msg:any="";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createAccount()
  {
    this.accountdetailsService.saveAccount(this.accountdetails).subscribe(data=>{this.msg=data;});
  }
  
}
