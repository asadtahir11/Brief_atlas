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
  searchText = "";

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

  // Search(){
  //   // alert(this.searchText)
  //    if(this.searchText!== ""){
  //      let searchValue = this.searchText.toLocaleLowerCase();
      
  //      this.data$ = this.data$.filter((contact:any) =>{
  //        return contact.name.toLocaleLowerCase().match(searchValue )
  //        ;
  //      // you can keep on adding object properties here   
       
  //            });
             
  //            console.log(this.data$);
  //          }
  //    }

}
