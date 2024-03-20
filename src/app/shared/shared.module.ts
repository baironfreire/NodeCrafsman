import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardTerminalComponent } from './components/card-terminal/card-terminal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CardTerminalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    CardTerminalComponent
  ]
})
export class SharedModule { }
