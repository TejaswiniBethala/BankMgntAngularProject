import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanklistComponent } from './banklist/banklist.component';
import { SavebankComponent } from './savebank/savebank.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';

import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BanklistComponent,
    SavebankComponent,
    UpdatebankComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    CustomerupdateComponent,
    AccountlistComponent,
    CreateaccountComponent,
    AccountupdateComponent,
    TransactionlistComponent,
    AddtransactionComponent,
    UpdatetransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
