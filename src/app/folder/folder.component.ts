import { Component, EventEmitter, Output } from '@angular/core';
import { MailItemComponent } from '../mail-item/mail-item.component';
import { EmailModel } from '../core/models/email.model';
import { emails } from '../core/data/emails.data';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../core/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule,
    RouterLinkActive,
    MailItemComponent,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent {
  emails$!: Observable<EmailModel[]>;
  isSidebarOpen = false;
  currentFolder: Observable<string>;
  isSidenavOpen = false;
  sidenavMode: 'side' | 'over' = 'side';

  constructor(
    route: ActivatedRoute,
    public authService: AuthService,
    breakpoint: BreakpointObserver
  ) {
    this.currentFolder = route.params.pipe(map((params) => params['folder']));
    this.emails$ = this.currentFolder.pipe(
      map((folder) =>
        emails[authService.getToken()!].filter((em) => em.folder === folder)
      )
    );
    breakpoint.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium]).subscribe(result => {
      console.log('result :>> ', result);
      this.sidenavMode = result.matches ? 'over' : 'side';
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
