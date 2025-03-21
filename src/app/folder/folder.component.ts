import { Component, EventEmitter, Output } from '@angular/core';
import { MailItemComponent } from '../mail-item/mail-item.component';
import { EmailModel } from '../core/models/email.model';
import { emails } from '../core/data/emails.data';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [AsyncPipe, RouterModule, MailItemComponent, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent {
  emails = emails
  isSidebarOpen = false;
  currentFolder: Observable<string>;
  isSidenavOpen = false;

  constructor(private route: ActivatedRoute) {
    this.currentFolder = this.route.params.pipe(map(params => params['folder']));
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }


}
