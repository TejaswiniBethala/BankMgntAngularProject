import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.css']
})
export class UpdatetransactionComponent implements OnInit
{
  transaction:Transaction=new Transaction();
  msg:any="";

  constructor(private transactionService:TransactionService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  TransactionUpdate()
  {
    this.transactionService.updateTransaction(this.transaction).subscribe(data=>{this.msg=data;});
  }

}
