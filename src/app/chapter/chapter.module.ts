import { ChapterComponent } from './chapter.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChapterComponent]
})
export class ChapterModule { }
