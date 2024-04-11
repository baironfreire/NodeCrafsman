import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface timeLineItems {
  startDate: string,
  endDate: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class DataTimeLineService {
  items: timeLineItems[] = [];
  constructor() { }

  setItems(items:timeLineItems[]) {
    this. items = items
  }

  getItems():Observable<timeLineItems[]>{
    return of(this.items)
  }
}
