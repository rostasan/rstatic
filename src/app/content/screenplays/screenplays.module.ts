import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { ScreenplaysComponent } from './containers/screenplays/screenplays.component';
import { SharedModule } from 'shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: ScreenplaysComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [ScreenplaysComponent]
})
export class ScreenplaysModule { }
