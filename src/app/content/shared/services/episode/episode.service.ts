import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Input } from '@angular/core';

// import store
import { Store } from 'store';

// services
import { AuthService } from 'auth/shared/services/auth/auth.service';

// Models
import { Episode } from 'models/episode';
import { Serial } from 'models/serial';

// rxjs
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { SerialService } from 'content/shared/services/serial/serial.service';


@Injectable()
export class EpisodeService  {
@Input()
id: any;


  EpisodeDoc: AngularFirestoreDocument<Episode>;
  SerialID: any;
  subscription: Subscription;
  serial$: Observable<Serial>;


  // // Observable stream for the filestore collection doc(this.SerialID).collection('episode'). 'VOTP2Hk442J6GmhXPQr3'
  episodes$: Observable<Episode[]> = this.afs.collection('serial').snapshotChanges()
  // // // episodes$: Observable<Episode[]> = this.afs.collection('serial').doc(this.id).collection('episode').snapshotChanges()

  // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Episode;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('episode', next));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private serialService: SerialService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramMap => this.id = paramMap.id);
        console.log('episode service', this.id);


  }
  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getEpisodeId(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Episode[]>('episode')
      .filter(Boolean)
      .map(episode => episode.find((episode: Episode) => episode.id === id));
  }

  getEpisodeTitle(customId: string) {
    if (!customId) {
      return Observable.of({});
    }
    return this.store.select<Episode[]>('episode')
      .filter(Boolean)
      .map(episode => episode.find((episode: Episode) => episode.title === customId));
  }
  getEpisode(SerialID: string) {
    console.log('get episode firing');
    return this.afs.collection('serial').doc(SerialID).collection('episode').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Episode;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        // updating the store with the data

      }).do(next => this.store.set('episode', next));
  }
  async addEpisode(episode: Episode, customId: string, SerialID: string) {
    return this.afs.collection('serial').doc(SerialID).collection('episode').doc(customId).set(episode);
  }

  updateEpisode(id: string, episode: Episode) {
    return this.afs.doc(`episode/${id}`).update(episode);
  }

  removeEpisode(episode: Episode) {
    this.EpisodeDoc = this.afs.doc(`episode/${episode}`);
    this.EpisodeDoc.delete();
  }
}
