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
  public collection$: BehaviorSubject<ListFunction[]>;

  constructor(
    private navService: NavService,
    private router: Router
  ) { 
    this.collection$ = this.navService.getBehaviorCollection();
    this.navService.refreshCollection();
  }

  ngOnInit(): void {
    console.log('test1',this.collection$);
  }


}
