import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchManagerService } from '../branch-manager.service';
@Component({
  selector: 'app-savebank',
  templateUrl: './savebank.component.html',
  styleUrls: ['./savebank.component.css']
})
export class SavebankComponent implements OnInit
{
  constructor(private branchmanagerService:BranchManagerService){}

  branchmanager:BranchManager=new BranchManager();
  msg:any="";

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }
  savebank()
  {
    this.branchmanagerService.saveBankDetails(this.branchmanager).subscribe(data=>{this.msg=data;});
  }
}
