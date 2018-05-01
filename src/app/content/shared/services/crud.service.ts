import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from 'auth/shared/services/auth/auth.service';
import { Store } from 'app/store';
import { Blog } from 'models/blog';

@Injectable()
export class CrudService {

  blog$: Observable<Blog[]> = this.db.list(`blog/${this.uid}`)
    .do(next => this.store.set('blog', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authSerice: AuthService
  ) { }

  get uid() {
    return this.authSerice.user.uid;
  }

}
