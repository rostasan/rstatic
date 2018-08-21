import { Injectable } from '@angular/core';

// import store
import { Store } from 'app/store';

// services
import { AuthService } from 'auth/shared/services/auth/auth.service';

// Models
import { Blog } from 'models/blog';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';



@Injectable()
export class CrudService {

  blogDoc: AngularFirestoreDocument<Blog>;

// Observable stream for the filestore collection
  blogs$: Observable<Blog[]> = this.afs.collection('blog').snapshotChanges()
      // map operator to get the document ID
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Blog;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        // updating the store with the data
    }).do(next => this.store.set('blog', next));


  constructor(
    private store: Store,
// to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getBlog(id: string) {
    if (!id) { return Observable.of({});
    }
    return this.store.select<Blog[]>('blog')
    .filter(Boolean)
    .map(blog => blog.find((blog: Blog) => blog.id === id));
  }

  getBlogTitle(customId: string) {
    if (!customId) {
      return Observable.of({});
    }
    return this.store.select<Blog[]>('blog')
      .filter(Boolean)
      .map(blog => blog.find((blog: Blog) => blog.title === customId));
  }

  addBlog(blog: Blog, customId: string) {
    return this.afs.collection('blog').doc(customId).set(blog);
    //     return this.afs.doc(`blog/${this.uid}`).set(blog); this adds the user id to the database
  }

  updateBlog(id: string, blog: Blog) {
    return this.afs.doc(`blog/${id}`).update(blog);
  }

  removeBlog(id: string, blog: Blog) {
    return this.afs.doc(`blog/${id}`).delete();
  }
}
