import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    '8edf6de5ec36b9194784fca359ce19bcca4dfaee747350e0d9d146a85381bd43',
  ];

  private passwordDimenticataDict: { [key: string]: string } = {
    'marco.mancini@pmail.mycases.org': 'Il mio mondo.'
  };

  constructor(private router: Router) { }

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

  passwordDimenticata(username: string): string {
    return this.passwordDimenticataDict[username];

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
