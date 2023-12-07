import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit{
  transactions:Transaction[]=[];
  transaction : Transaction=new Transaction();

  constructor(private transactionService:TransactionService){}

  ngOnInit(): void {
    this.getAllTransactions();
  }
  getAllTransactions()
  {
    this.transactionService.getalltransactions().subscribe(data=>{this.transactions=data});
  }

}
