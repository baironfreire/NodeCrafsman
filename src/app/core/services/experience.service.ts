import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/shared/models/experience.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.experienceRoute.getAllExperiencies}`);
  }

  public async crearItemsTimeLine(
    experiences:Experience[]
  ){
    return experiences.map((experience:Experience) => {
      return {
        id: experience.id,
        period: experience.period,
        description: `${experience.project} - ${experience.location}`
      }
    });
  }

}
