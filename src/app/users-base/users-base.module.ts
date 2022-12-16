import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersListComponent, UsersDetailComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UsersListComponent, UsersDetailComponent],
  providers: [UserService]
})
export class UsersBaseModule {}
