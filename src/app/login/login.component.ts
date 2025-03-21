import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage?: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const login = this.authService.login(this.username, this.password);
    if (login) {
      this.router.navigate(['/inbox']);
    } else {
      this.errorMessage = 'Credenziali errate! Riprova.';
    }
  };


}
