import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService
 {
  private restUrl='http://localhost:8081'
  constructor(private httpClient:HttpClient) { }

  getCustDetails():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`${this.restUrl}/customer/getallrecords`,{responseType:'json'});
  }
  saveCustomer(customer:Customer):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/customer/insertdetails`,customer,{responseType:"text"});
  }
  updateCustomer(customer:Customer):Observable<Object>

{
  return this.httpClient.put(`${this.restUrl}/customer/updatedetails`,customer,{responseType:"text"});
}
}
