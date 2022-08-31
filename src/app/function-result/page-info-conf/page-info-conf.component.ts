import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-page-info-conf',
  templateUrl: './page-info-conf.component.html',
  styleUrls: ['./page-info-conf.component.scss']
})
export class PageInfoConfComponent implements OnInit {

  data$!: Observable<any[]>;

  public datas : any[] = [];

  constructor(
    private navService: NavService
  ) { }

  ngOnInit(): void {

    this.data$ = this.fetchAll();
  }

  fetchAll(): Observable<any[]> {
    return this.navService.getInfoConf();   
  }

}
