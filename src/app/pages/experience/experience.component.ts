import { Component, OnInit } from '@angular/core';
import { DataTimeLineService } from 'src/app/shared/services/data-time-line.service';
import { ExperienceService } from '../../core/services/experience.service';
import { Experience } from 'src/app/shared/models/experience.model';
import { timeLineItems } from '../../shared/services/data-time-line.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title!:string;
  selectedExperience!:Experience|undefined;
  experiencies:Experience[] = [];

  constructor(
    private dataTimeLineService: DataTimeLineService,
    private experienceService: ExperienceService
  ) { 
    this.experienceService.getAllExperiences().subscribe((exp:Experience[]) => {
      this.experiencies = exp;
      this.selectedExperience = this.experiencies[0];
      this.experienceService.crearItemsTimeLine(exp).then(
        (items:any) => {
          console.log('items', items)
          this.dataTimeLineService.setItems(items)
        }
      )
    })

    

    this.dataTimeLineService.selectedItem$.subscribe(item => {
      this.selectedExperience = this.experiencies.find((exp:Experience) => exp.id == item.id)
    });
  }

  ngOnInit(): void {
    this.title = 'Experiencia Profesional';
    
  }

}
