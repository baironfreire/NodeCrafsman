import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';


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
  public getAllUsers(): Observable<User[]> {

    //return this.http.get<User[]>(`${environment.userRoute.getAllUser}`);
    return from(
      fetch(`${environment.userRoute.getAllUser}`).then(response => {
        if(response.ok){
          return response.json();
        }
        return undefined
      })
    );
  }
  public findUserById(userId:number): Promise<User|undefined>{
    return new Promise((resolve, reject) => {
        this.getAllUsers().subscribe(
          (response:User[]) => {
            console.log('user', response)
            let user = response.find((user:User) => user.id == userId) || undefined
            resolve(user);
          },
          (error) => {
            console.log("Error ", error)
            reject(undefined)
          }
        );
    })
  }

}
