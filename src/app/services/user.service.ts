import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/constants';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  /* getUsers(): IUser[] {
    return [
      { id: 1, name: 'Yunus', isActive: false },
      { id: 2, name: 'Emre', isActive: true },
      { id: 3, name: 'Bican', isActive: true }
    ];
  } */

  getUsers(): Observable<any> {
    return this.http.get<any>(URL);
  }
}
