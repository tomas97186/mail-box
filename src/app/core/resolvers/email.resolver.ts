import { ResolveFn } from '@angular/router';
import { EmailModel } from '../models/email.model';
import { emails } from '../data/emails.data';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const emailResolver: ResolveFn<EmailModel> = (route, state) => {
  const id = route.params['id'];
  const token = inject(AuthService).getToken();

  return emails[token!].find(email => email.id.toString() === id)!;
};
