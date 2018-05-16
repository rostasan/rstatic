import { Blog } from 'models/blog';
import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-blog-form',
  // changedetection due to this being a presentational component
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  @Output()
  create = new EventEmitter<Blog>();

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

   creatBlog() {

    this.create.emit(this.form.value);
    }


}
