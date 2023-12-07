import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchManagerService } from '../branch-manager.service';
@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit
{
  branchmanagers:BranchManager[]=[];
  branchmanager:BranchManager=new BranchManager();
  constructor(private branchmanagerService:BranchManagerService){}

  ngOnInit(): void {
    this.getAllBranchDetails();
  }
  getAllBranchDetails()
  {
    this.branchmanagerService.getAllBranchDetails().subscribe(data=>{this.branchmanagers=data;});
  }
}
