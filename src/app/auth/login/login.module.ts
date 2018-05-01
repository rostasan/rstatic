import { SharedLoginModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedLoginModule
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }


