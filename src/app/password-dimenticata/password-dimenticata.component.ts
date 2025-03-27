import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-dimenticata',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './password-dimenticata.component.html',
  styleUrl: './password-dimenticata.component.scss'
})
export class PasswordDimenticataComponent {
  username = '';
  password = '';
  suggestion?: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.suggestion = this.authService.passwordDimenticata(this.username)?? 'error';
  };

}
