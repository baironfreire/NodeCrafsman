import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user!:User|undefined;
  constructor(
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.findUserById(1);
  }

}
