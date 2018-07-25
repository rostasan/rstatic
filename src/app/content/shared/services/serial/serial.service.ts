import { Injectable } from '@angular/core';

// import store
import { Store } from 'store';

// services
import { AuthService } from 'auth/shared/services/auth/auth.service';

// Models
import { Serial } from 'models/serial';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';



@Injectable()
export class SerialService {

  SerialDoc: AngularFirestoreDocument<Serial>;

  // Observable stream for the filestore collection
  serials$: Observable<Serial[]> = this.afs.collection('serial').snapshotChanges()
    // map operator to get the document ID
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Serial;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      // updating the store with the data
    }).do(next => this.store.set('serial', next));


  constructor(
    private store: Store,
    // to connect to the Cloud Firestore database
    private afs: AngularFirestore,
    private authService: AuthService
  ) { }

  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getSerial(id: string) {
    if (!id) {
      return Observable.of({});
    }
    return this.store.select<Serial[]>('serial')
      .filter(Boolean)
      .map(serial => serial.find((serial: Serial) => serial.id === id));
  }
  addSerial(serial: Serial) {
    return this.afs.collection('serial').add(serial);
    //     return this.afs.doc(`Serial/${this.uid}`).set(Serial); this adds the user id to the database
  }

  updateSerial(id: string, serial: Serial) {
    return this.afs.doc(`serial/${id}`).update(serial);
  }

  removeSerial(serial: Serial) {
    this.SerialDoc = this.afs.doc(`serial/${serial}`);
    this.SerialDoc.delete();
  }
}
