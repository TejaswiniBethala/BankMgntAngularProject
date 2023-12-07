import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavebankComponent } from './savebank/savebank.component';
import { BanklistComponent } from './banklist/banklist.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
const routes: Routes = [
  {path:'getallBranchDetails',component:BanklistComponent},
  {path:'saveBankDetails',component:SavebankComponent},
  {path:'updateBankDetails',component:UpdatebankComponent},
  {path:'saveCustomer',component:AddcustomerComponent},
  {path:'updateCustomer',component:CustomerupdateComponent},
  {path:'getCustDetails',component:CustomerlistComponent},
  {path:'saveAccount',component:CreateaccountComponent},
  {path:'updateAccount',component:AccountupdateComponent},
  {path:'getallAccounts',component:AccountlistComponent},
  {path:'getalltransactions',component:TransactionlistComponent},
  {path:'saveTransaction',component:AddtransactionComponent},
  {path:'updateTransaction',component:UpdatetransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
