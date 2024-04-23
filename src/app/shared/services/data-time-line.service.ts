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
  selectedItem!: timeLineItems;
  private itemsSubject = new Subject<any[]>();
  items$: Observable<timeLineItems[]> = this.itemsSubject.asObservable();


  constructor() { }

  setItems(items:timeLineItems[]) {
    this.itemsSubject.next(items)
  }


  setSelectedItem(item:timeLineItems){
    console.log('%csrc/app/shared/services/data-time-line.service.ts:27 item', 'color: #007acc;', item);
    this.selectedItem = item
  }

  getSelectedItem(){
    return this.selectedItem;
  }
}
