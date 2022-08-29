import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { ListFunction } from 'src/app/core/models/list-function';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  
  public collection$: BehaviorSubject<ListFunction[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) { 

    this.collection$ = new BehaviorSubject<ListFunction[]>([]);
  }

  public refreshCollection(): void {
    this.http.get<ListFunction[]>(`${this.url}/listFunction`).pipe(
      map((tabJson) => {
        return tabJson.map(objet => new ListFunction(objet))
      })
    ).subscribe((listListFunction: ListFunction[]) => {
      this.collection$.next(listListFunction);
    });
  }

  public getBehaviorCollection(): BehaviorSubject<ListFunction[]> {
    return this.collection$;
  }

}
