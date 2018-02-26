import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStoryComponent } from './add-story.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, // for access to the Angular directives such as NgIf and NgFor
    FormsModule
  ],
  declarations: [AddStoryComponent]
})
export class AddStoryModule { }
