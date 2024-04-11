import { Component, OnInit } from '@angular/core';
import { DataTimeLineService } from 'src/app/shared/services/data-time-line.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title!:string;
  constructor(
    private dataTimeLineService: DataTimeLineService
  ) { }

  ngOnInit(): void {
    this.title = 'Experiencia Profesional';
    this.dataTimeLineService.setItems(
      [
        {
          startDate: "09/2021",
          endDate: "09/2023",
          description: "Accenture - Bam - Backend Developer - Colombia - Bogota"
        },
        {
          startDate: "09/2018",
          endDate: "09/2021",
          description: "Iteria - Colokial - Full Stack Developer - Colombia - Cali"
        },
        {
          startDate: "09/2015",
          endDate: "09/2018",
          description: "Premize - Energon - Full Stack Developer - Colombia - Cali"
        },
      ]
    )
  }

}
