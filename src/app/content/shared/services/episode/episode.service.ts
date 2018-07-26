import { ActivatedRoute } from '@angular/router';
import { Serial } from 'models/serial';
import { Injectable } from '@angular/core';

// import store
import { Store } from 'store';

// services
import { AuthService } from 'auth/shared/services/auth/auth.service';

// Models
import { Episode } from 'models/episode';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';



@Injectable()
export class EpisodeService {
  private sub: any;
  private parentRoute: any;

  // course$ = this.route.parent.params.switchMap(params => {
  //   return this.store
  //     .select()
  //     .map((courses: any) => courses.courses.find(course => course._id === params.id));
  // });

  EpisodeDoc: AngularFirestoreDocument<Episode>;
  episodeDoc: any;


  // Observable stream for the filestore collection
  episodes$: Observable<Serial[]> = this.afs.collection('episodes').snapshotChanges()
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Serial;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('episodes', next));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    // this gets the ID of the parent document of the new collection Episode.
    const id: Observable<string> = route.params.map(p => p.id);
    const url: Observable<string> = route.url.map(segments => segments.join(''));
    const serialID = route.data.map(d => d.serialID);
    this.episodeDoc = this.afs.doc('serial/serialID');  }


  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getEpisode(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Episode[]>('episode')
      .filter(Boolean)
      .map(episode => episode.find((episode: Episode) => episode.id === id));
  }
  addEpisode(episode: Episode) {
    return this.episodeDoc.collection('episode').add(episode);
  }

  updateEpisode(id: string, episode: Episode) {
    return this.afs.doc(`episode/${id}`).update(episode);
  }

  removeEpisode(episode: Episode) {
    this.EpisodeDoc = this.afs.doc(`episode/${episode}`);
    this.EpisodeDoc.delete();
  }
}
