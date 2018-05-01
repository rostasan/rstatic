import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { BlogComponent } from './containers/blog/blog.component';

// Shared Module
import { SharedModule } from 'content/shared/shared.module';


export const ROUTES: Routes = [
  { path: '', component: BlogComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
