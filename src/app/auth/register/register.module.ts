import { NgModule } from '@angular/core';
import { SharedLoginModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

export const ROUTES: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedLoginModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
