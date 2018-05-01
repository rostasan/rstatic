import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { SerialComponent } from './containers/serial/serial.component';
import { SharedModule } from 'content/shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: SerialComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [SerialComponent]
})
export class SerialModule { }
