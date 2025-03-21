import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EmailModel } from '../core/models/email.model';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-mail-details',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './mail-details.component.html',
  styleUrl: './mail-details.component.scss'
})
export class MailDetailsComponent {
  email!: EmailModel;

  constructor(route: ActivatedRoute, private location: Location) {
    this.email = route.snapshot.data['mail'];
    console.log(route.snapshot.data);
  }

  back() {
    this.location.back();
  }
}
