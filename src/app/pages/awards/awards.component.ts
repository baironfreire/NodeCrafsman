import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  title!:string
  constructor() { }

  ngOnInit(): void {
    this.title = 'Cerficicaciones'
  }

}
