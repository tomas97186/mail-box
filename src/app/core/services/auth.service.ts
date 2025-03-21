import { Injectable } from '@angular/core';
// @ts-ignore 
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    "3b9d0e2a0abab0bd91b3b7f22112ef2eb594ea1708048aa6a5e519f32189c421"
  ]


  constructor() { }

  login(username: string, password: string): boolean {
    const encToken = CryptoJS.SHA256(username + password).toString();
    console.log(encToken);
    if (this.users.includes(encToken)) {
      localStorage.setItem('auth_token', encToken);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
