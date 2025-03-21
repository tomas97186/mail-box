import { ResolveFn } from '@angular/router';
import { EmailModel } from '../models/email.model';
import { emails } from '../data/emails.data';

export const emailResolver: ResolveFn<EmailModel> = (route, state) => {
  const id = route.params['id'];

  return emails.find(email => email.id.toString() === id)!;
};
