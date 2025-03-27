import { Component, inject, Input } from '@angular/core';
import { EmailModel } from '../core/models/email.model';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mail-item',
  standalone: true,
  imports: [DatePipe,MatIconModule, CommonModule],
  templateUrl: './mail-item.component.html',
  styleUrl: './mail-item.component.scss'
})
export class MailItemComponent {
  @Input() mail!: EmailModel;
  private router = inject(Router);

  openDetails() {
    return this.router.navigate(['/details', this.mail.id]);
  }
}
