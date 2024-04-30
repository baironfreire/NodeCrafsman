import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllEducation():  Observable<any[]>{
    return this.http.get<any[]>(`${environment.educationRoute.getAllEducation}`)
  }

}
