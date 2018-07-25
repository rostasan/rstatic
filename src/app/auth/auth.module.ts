import { RegisterModule } from 'auth/register/register.module';
import { LoginModule } from 'auth/login/login.module';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      // { path: 'login', loadChildren: './login/login.module#LoginModule' },
      // { path: 'register', loadChildren: './register/register.module#RegisterModule' },
      { path: 'login', loadChildren: () => LoginModule },
      { path: 'register', loadChildren: () => RegisterModule }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: []
})
export class AuthModule { }
