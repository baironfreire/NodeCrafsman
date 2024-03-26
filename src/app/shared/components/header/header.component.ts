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

  ngOnInit(): void {
    this.userService.getUserInfoById(1).subscribe((user:User) => {
      console.log('user', user);
      this.user = new User(
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
    }, (error) => {
      console.log('%csrc/app/shared/components/header/header.component.ts:21 error', 'color: #007acc;', error);
    })
  }

}
