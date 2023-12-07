import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchManager } from './branch-manager';
@Injectable({
  providedIn: 'root'
})
export class BranchManagerService 
{
  private restUrl='http://localhost:8081'
  constructor(private httpClient:HttpClient) { }

  getAllBranchDetails():Observable<BranchManager[]>
  {
    return this.httpClient.get<BranchManager[]>(`${this.restUrl}/branch/getdetails`,{responseType:'json'});
  }
  saveBankDetails(branchmanager:BranchManager):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/branch/insertdetails`,branchmanager,{responseType:"text"});
  }
  updateBankDetails(branchmanager:BranchManager):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/branch/updatedetails`,branchmanager,{responseType:"text"});
  }
  
}
