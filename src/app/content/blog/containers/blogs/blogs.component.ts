import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

// interfaces
import { Blog } from 'models/blog';

// services
import { CrudService } from 'content/shared/services/crud.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  blog$: Observable<Blog>;
  subscription: Subscription;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.subscription = this.crudService.blogs$.subscribe();
    this.blog$ = this.route.params
      .switchMap(param =>  this.crudService.getBlog(param.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addBlog(event: Blog) {
    await this.crudService.addBlog(event);
    this.backToBlog();
  }

  async updateBlog(event: Blog) {
    const id = this.route.snapshot.params.id;
    await this.crudService.updateBlog(id, event);
    this.backToBlog();
  }

  async removeBlog(event: Blog) {
    const id = this.route.snapshot.params.id;
    await this.crudService.removeBlog(id);
    this.backToBlog();
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }
}
