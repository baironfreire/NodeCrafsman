import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  public getUserInfoById(userId: number): Observable<User>{
      console.log(`${environment.userRoute.getInfoUserById}/${userId}`);
      return this.http.get<User>(`${environment.userRoute.getInfoUserById}/${userId}`);
  }

}
