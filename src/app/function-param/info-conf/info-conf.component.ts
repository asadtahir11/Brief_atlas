import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { InfoServer } from 'src/app/core/models/info-server';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-info-conf',
  templateUrl: './info-conf.component.html',
  styleUrls: ['./info-conf.component.scss']
})
export class InfoConfComponent implements OnInit {

  public infoServer$: BehaviorSubject<InfoServer[]>;
  selectedValue! : number;

  constructor(
    private navService: NavService,
    private router: Router
  ) { 
    this.infoServer$ = this.navService.getBehaviorInfoServer();
    this.navService.refreshInfoServer();
  }
  
  ngOnInit(): void {
  }
  
  changeValue(e:any){
    console.log(e.target.value);
    this.selectedValue = e.target.value;
  }
}
