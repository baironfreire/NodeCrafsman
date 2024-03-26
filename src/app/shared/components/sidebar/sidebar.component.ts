import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user!:User;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfoById(1).subscribe((user) => {
      this.user = user
    }, (error) => {
      console.log('%csrc/app/shared/components/sidebar/sidebar.component.ts:20 error', 'color: #007acc;', error);
    })
  }

}
