import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardTerminalComponent } from './components/card-terminal/card-terminal.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CardTerminalComponent,
    TimeLineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    CardTerminalComponent,
    TimeLineComponent
  ],
  providers: []
})
export class SharedModule { }
