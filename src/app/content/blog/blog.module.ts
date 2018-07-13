import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// conatiners
import { BlogComponent } from './containers/blog/blog.component';
import { BlogsComponent } from './containers/blogs/blogs.component';

// components


// Shared Module
import { SharedModule } from 'content/shared/shared.module';
import { CrudService } from 'content/shared/services/crud.service';
import { BlogFormComponent } from 'content/blog/components/blog-form/blog-form.component';

import { EditorModule } from '@tinymce/tinymce-angular';




export const ROUTES: Routes = [
  { path: '', component: BlogComponent },
  { path: 'new', component: BlogsComponent },
  { path: 'blog/:id', component: BlogsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    EditorModule
  ],
  declarations: [
    BlogComponent,
    BlogsComponent,
    BlogFormComponent],
  providers: [CrudService],
  exports: [BlogFormComponent]
})
export class BlogModule { }
