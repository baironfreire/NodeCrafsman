import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PagesModule { }
