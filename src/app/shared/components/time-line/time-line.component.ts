import { Component, OnInit } from '@angular/core';
import { DataTimeLineService, timeLineItems } from '../../services/data-time-line.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  items:timeLineItems[]= []
  selectedItem!: timeLineItems;
  constructor(
    public dataTimeLineService: DataTimeLineService
  ) { }

  ngOnInit(): void {
    this.dataTimeLineService.items$.subscribe(items => {
      this.items = items;
    });
  }

  onSelectedItem(item:any){
    console.log('item selected', item);
    this.selectedItem = item
    console.log('selectedItem', this.selectedItem);
  }

}
