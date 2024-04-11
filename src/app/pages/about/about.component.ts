import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user-model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title!:string;
  user!:User;
  id!:number;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = 1;
    this.title = 'Perfil Profesional';
    this.userService.getUserInfoById(this.id).subscribe(
      (response) => {
        console.log('user', response)
        this.user = response
      },
      (error) => {
        console.log("Error ", error)
      }
    );
  }

}
