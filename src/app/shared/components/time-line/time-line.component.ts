import { Component, OnInit } from '@angular/core';
import { DataTimeLineService, timeLineItems } from '../../services/data-time-line.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  items:timeLineItems[]= []

  constructor(
    private dataTimeLineService: DataTimeLineService
  ) { }

  ngOnInit(): void {
    this.dataTimeLineService.getItems().subscribe((items) => {
      this.items = items
    })
  }

}
