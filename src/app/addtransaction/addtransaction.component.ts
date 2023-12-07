import { Component,OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit{
  constructor(private transactionService:TransactionService){}
  transaction:Transaction=new Transaction();
  msg:any="";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createTransaction()
  {
    this.transactionService.saveTransaction(this.transaction).subscribe(data=>{this.msg=data;});
  }

}
