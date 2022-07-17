import { User } from './user';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();

  constructor() {}
  login(email: string, password: string) {
    return of({ email, password });
  }
  logout() {
    console.log('user deleted');
    this.setUser(null);
  }
  getUser() {
    return this.user$.asOservable();
  }
  register(user: any) {
    this.setUser(user);
    console.log('registered user successfully', user);
    return of(user);
  }
  private setUser(user: any) {
    this.user$.next(user);
  }
}
