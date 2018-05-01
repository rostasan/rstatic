import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { ProseComponent } from './containers/prose/prose.component';

// Share Module
import { SharedModule } from './../../shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: ProseComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [ProseComponent]
})
export class ProseModule { }
