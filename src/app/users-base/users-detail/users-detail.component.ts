import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent {
  @Input()
  detail!: any;

  constructor() {}
}
