import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { ListFunction } from 'src/app/core/models/list-function';
import { environment } from 'src/environments/environment';
import { InfoServer } from '../models/info-server';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  
  public collection$: BehaviorSubject<ListFunction[]>;
  public infoServer$: BehaviorSubject<InfoServer[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) { 

    this.collection$ = new BehaviorSubject<ListFunction[]>([]);
    this.infoServer$ = new BehaviorSubject<InfoServer[]>([]);
  }

  public refreshCollection(): void {
    this.http.get<ListFunction[]>(`${this.url}/listFunction`).pipe(
      map((tabJson) => {
        return tabJson.map(objet => new ListFunction(objet))
      })
    ).subscribe((listFunction: ListFunction[]) => {
      this.collection$.next(listFunction);
    });
  }

  public refreshInfoServer(): void {
    this.http.get<InfoServer[]>(`${this.url}/servers`).pipe(
      map((tabJson) => {
        return tabJson.map(objet => new InfoServer(objet))
      })
    ).subscribe((listInfoServer: InfoServer[]) => {
      this.infoServer$.next(listInfoServer);
    });
  }

  
  public getBehaviorCollection(): BehaviorSubject<ListFunction[]> {
    return this.collection$;
  }
  
  public getBehaviorInfoServer(): BehaviorSubject<InfoServer[]> {
    return this.infoServer$;
  }
  
  getInfoConf():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/infoConf', { responseType: "json" });
  }
}
