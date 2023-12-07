import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDetails } from './account-details';
@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService 
{
  private restUrl='http://localhost:8081'
  constructor(private httpClient:HttpClient) { }

  getallAccounts():Observable<AccountDetails[]>
  {
    return this.httpClient.get<AccountDetails[]>(`${this.restUrl}/account/getdetails`,{responseType:'json'});
  }
  saveAccount(account:AccountDetails):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/account/insertdetails`,account,{responseType:"text"});
  }
  updateAccount(account:AccountDetails):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/account/updatedetails`,account,{responseType:"text"});
  }
}
