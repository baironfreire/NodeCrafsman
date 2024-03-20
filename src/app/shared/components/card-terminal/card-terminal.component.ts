import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-terminal',
  templateUrl: './card-terminal.component.html',
  styleUrls: ['./card-terminal.component.css']
})
export class CardTerminalComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  subtitle!: string;
  constructor() { }

  ngOnInit(): void {
    this.title = (!this.title)? 'Titulo': this.title;
    this.subtitle = 'Sub titulo';
  }

}
