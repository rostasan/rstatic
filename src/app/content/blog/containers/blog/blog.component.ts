import { Store } from 'app/store';
import { Blog } from 'models/blog';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'content/shared/services/crud.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  blogs$: Observable<Blog[]>;
  subscription: Subscription;
  blog: Blog[];

  constructor(
    private store: Store,
    private crudService: CrudService
  ) { }

ngOnInit() {
  this.blogs$ = this.store.select<Blog[]>('blog');
  this.subscription = this.crudService.blogs$.subscribe();
}

ngOnDestroy() {
  this.subscription.unsubscribe();

}
  removeBlog(event: Blog) {
    this.crudService.removeBlog(event);
  }
}
