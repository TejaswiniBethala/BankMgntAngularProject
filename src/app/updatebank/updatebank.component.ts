import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchManagerService } from '../branch-manager.service';
@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent implements OnInit
{
  branchmanager:BranchManager=new BranchManager();
  msg:any="";

  constructor(private branchmanagerService:BranchManagerService){}

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }
  updatebank()
  {
    this.branchmanagerService.updateBankDetails(this.branchmanager).subscribe(data=>{this.msg=data;});
  }
}
