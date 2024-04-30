import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../core/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title!: string
  degrees!:any[]
  constructor(
    private educationService: EducationService
  ) { }

  ngOnInit(): void {
    this.title = 'Educación';
    this.getAllDegree();
  }

  getAllDegree(){
    this.educationService.getAllEducation().subscribe(
      (response) => {
        console.log("reponse", response)
        this.degrees = response;
      }
    )
  }

}
