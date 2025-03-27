import { Component, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EmailModel } from '../core/models/email.model';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-mail-details',
  standalone: true,
  imports: [
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  templateUrl: './mail-details.component.html',
  styleUrl: './mail-details.component.scss',
})
export class MailDetailsComponent {
  email!: EmailModel;

  constructor(
    route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    this.email = route.snapshot.data['mail'];
    console.log(route.snapshot.data);
  }

  funzioneNonDisponibile() {
    let snackBarRef = this.snackBar.open(
      'Stiamo effettuando operazioni di manutenzione. \n La casella di posta è attualmente in sola lettura.',
      undefined,
      { duration: 3000 }
    );
  }

  back() {
    this.location.back();
  }
}
