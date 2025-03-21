import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { emailResolver } from './core/resolvers/email.resolver';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/inbox',
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'details/:id',
        loadComponent: () => import('./mail-details/mail-details.component').then(m => m.MailDetailsComponent),
        resolve: {
            mail: emailResolver
        }
    },
    {
        path: ':folder',
        canActivate: [authGuard],
        loadComponent: () => import('./folder/folder.component').then(m => m.FolderComponent)
    },
];
