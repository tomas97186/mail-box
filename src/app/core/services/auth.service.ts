import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    '3b9d0e2a0abab0bd91b3b7f22112ef2eb594ea1708048aa6a5e519f32189c421',
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const encToken = CryptoJS.SHA256(username + password).toString();
    console.log(encToken);
    if (this.users.includes(encToken)) {
      localStorage.setItem('auth_token', encToken);
      localStorage.setItem('username', username);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
