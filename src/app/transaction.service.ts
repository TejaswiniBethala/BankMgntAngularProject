import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private restUrl='http://localhost:8081'
  constructor(private httpClient:HttpClient) { }

  getalltransactions():Observable<Transaction[]>
  {
    return this.httpClient.get<Transaction[]>(`${this.restUrl}/transaction/getdetails`,{responseType:'json'});
  }
  saveTransaction(transaction:Transaction):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/transaction/insertdetails`,transaction,{responseType:"text"});
  }
  updateTransaction(transaction:Transaction):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/transaction/updatedetails`,transaction,{responseType:"text"});
  }
}
