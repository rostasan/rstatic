import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// conatiners
import { PlaysComponent } from './containers/plays/plays.component';

// Share Modules
import { SharedModule } from 'content/shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: PlaysComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [PlaysComponent]
})
export class PlaysModule { }
