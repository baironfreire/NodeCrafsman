import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

export interface timeLineItems {
  id: number,
  period: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class DataTimeLineService {
  private itemsSubject = new Subject<any[]>();
  private selectedItemsSubject = new Subject<any>();
  items$: Observable<timeLineItems[]> = this.itemsSubject.asObservable();
  selectedItem$: Observable<timeLineItems> = this.selectedItemsSubject.asObservable();


  constructor() { }

  setItems(items:timeLineItems[]) {
    this.itemsSubject.next(items)
  }
  setSelectedItem(item:timeLineItems){
    this.selectedItemsSubject.next(item) 
  }

}
