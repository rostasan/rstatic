import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProseComponent } from './prose.component';
import { AddStoryModule } from '../add-story/add-story.module';

@NgModule({
  imports: [
    CommonModule,
    AddStoryModule,
    FormsModule
  ],
  declarations: [ProseComponent]
})
export class ProseModule { }
