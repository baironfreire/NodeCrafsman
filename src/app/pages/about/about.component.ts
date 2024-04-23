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
  user!:User|undefined;
  id!:number;
  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.id = 1;
    this.title = 'Perfil Profesional';
    this.user = await this.userService.findUserById(this.id);
    console.log('user', this.user);
  }

}
