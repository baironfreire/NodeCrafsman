import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTimeLineService {
  items: any[] = [];
  constructor() { }

  setItems(items:any) {
    this. items = items
  }

  getItems():Observable<any[]>{
    return of(this.items)
  }
}
