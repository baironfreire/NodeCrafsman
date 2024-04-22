import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!:User;
  constructor(
    private userService: UserService
  ) { 
    
  }

  async ngOnInit(): Promise<void> {
    let user:any = await this.userService.findUserById(1);
    this.user = new User(
      user.id,
      user.name,
      user.lastName,
      user.cellPhone,
      user.address,
      user.username,
      user.email,
      user.profile,
      user.city,
      user.department,
      user.country,
      user.role
    )
  }

}
