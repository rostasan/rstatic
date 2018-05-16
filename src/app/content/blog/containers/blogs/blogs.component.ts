import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// interfaces
import { Blog } from 'models/blog';

// services
import { CrudService } from 'content/shared/services/crud.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  async addBlog(event: Blog) {
  await this.crudService.addBlog(event);
  this.backToBlog();
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }

  ngOnInit() {
  }

}
