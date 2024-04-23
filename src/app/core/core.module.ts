import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ExperienceService } from './services/experience.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    ExperienceService
  ]
})
export class CoreModule { }
