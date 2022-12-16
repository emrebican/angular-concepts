import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['../../home/home.component.css', './users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: IUser[];

  constructor(private service: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    // this.users = this.service.getUsers();
    this.service.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });

    console.log('User List Component rendered');
  }
}
