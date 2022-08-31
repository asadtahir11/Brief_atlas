import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoServer } from 'src/app/core/models/info-server';
import { NavService } from 'src/app/core/services/nav.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-last-inst',
  templateUrl: './last-inst.component.html',
  styleUrls: ['./last-inst.component.scss']
})
export class LastInstComponent implements OnInit {

  private url = environment.urlApi;
 
  public infoServer$: BehaviorSubject<InfoServer[]>;
  public infos : InfoServer[] = []
  selectedValue! : number;

  param1List : any[] = [];
  param2List : any[] = [];
  dropdownSettings!:IDropdownSettings;
  
  submitForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private navService: NavService,
    private router: Router,
    private formBuilder : FormBuilder,
  ) { 
    this.infoServer$ = this.navService.getBehaviorInfoServer();
    this.navService.refreshInfoServer();
  
  }
  
  ngOnInit(): void {

    this.submitForm = new FormGroup({
      serveur:new FormControl('', Validators.required),
      application:new FormControl('', Validators.required),
      limit:new FormControl(''),
     })
    
    this.getParamData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      noFilteredDataAvailablePlaceholderText: 'Aucun résultat',
    };    
  }

  changeValue(e:any){
    console.log(e.target.value);
    this.selectedValue = e.target.value;
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  
  getParamData(): void {
    let param1: any[] = [];
    let param2: any[] = [];
    this.http.get<any>(this.url+'/servers').subscribe(data => {
      for(let i=0; i < data.length; i++) {
        param1.push({ item_id: i, item_text: data[i].applivspe });
        param2.push({ item_id: i, item_text: data[i].serveur });
      }
      return [this.param1List = param1,this.param2List = param2]
      
    });
  }
  
  submit (){
    console.log('reactive form value2',this.submitForm.value);  
    this.router.navigate(['function/infoconf']);
  }

}
