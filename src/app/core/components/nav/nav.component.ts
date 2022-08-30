import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ListFunction } from 'src/app/core/models/list-function';
import { NavService } from 'src/app/core/services/nav.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public listFunction$: BehaviorSubject<ListFunction[]>;
  selectedFunction! : number;
  infoConfId! : number;
  lastInstId! : number;
  
  constructor(
    private navService: NavService,
    private router: Router
  ) { 
    this.listFunction$ = this.navService.getBehaviorCollection();
    this.navService.refreshCollection();
  }
  
  ngOnInit(): void {
    this.lastInstId = 1;
    this.infoConfId = 2;
  }
  
  changeFunction(e:any){
    console.log(e.target.value);
    this.selectedFunction = e.target.value;
  }
  
}
