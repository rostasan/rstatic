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

  blog$: Observable<Blog[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private crudService: CrudService
  ) { }

ngOnInit() {
  this.blog$ = this.store.select<Blog[]>('blog');
  this.subscription = this.crudService.blog$.subscribe();
}

ngOnDestroy() {
  this.subscription.unsubscribe();

}

}
