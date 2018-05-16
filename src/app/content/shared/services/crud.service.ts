import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Store } from 'app/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from 'auth/shared/services/auth/auth.service';


// Models
import { Blog } from 'models/blog';
import { $ } from 'protractor';

@Injectable()
export class CrudService {


      blog$: Observable<Blog[]> = this.db.list(`blog/${this.uid}`).valueChanges()
      .do(next => this.store.set('blog', next));


  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authSerice: AuthService
  ) {

  }

  get uid() {
    return this.authSerice.user.uid;
  }

  addBlog(blog: Blog) {
    return this.db.list(`blog/${this.uid}`).push(blog);
  }

}
