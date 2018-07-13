import { Blog } from 'models/blog';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-blog-form',
  // changedetection due to this being a presentational component telling angular it doesn't need to keep track of it
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnChanges {

  @Input()
  blog: Blog;

  @Output()
  create = new EventEmitter<Blog>();

  @Output()
  update = new EventEmitter<Blog>();

  @Output()
  remove = new EventEmitter<Blog>();

  toggled = false;
  exists = false;


  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.blog && this.blog.title) {
      this.exists = true;
      const value = this.blog;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('title').hasError('required') &&
      this.form.get('title').touched
    );
  }
   createBlog() {
     if (this.form.valid) {
     this.create.emit(this.form.value);
      }
    }

    updateBlog() {
      if (this.form.valid) {
      this.update.emit(this.form.value);
      }
    }


    removeBlog() {
      this.remove.emit(this.form.value);
      }

  toggle() {
    this.toggled = !this.toggled;

  }
}
