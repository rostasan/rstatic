import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

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
export class EpisodeService {
  id: any;

  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramMap => this.id = paramMap.id);
    console.log('route service', this.id);
}



}
