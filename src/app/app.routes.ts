import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'step1',
    loadComponent: () => import('./formRegister/step1/step1.page').then( m => m.Step1Page)
  },
  {
    path: 'step2',
    loadComponent: () => import('./formRegister/step2/step2.page').then( m => m.Step2Page)
  },
];
