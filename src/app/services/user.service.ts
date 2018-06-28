import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USERS } from '../mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(key) : Observable<any> {
    return of (USERS.find(user => user.key === key));
  }
}
