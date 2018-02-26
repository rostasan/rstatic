
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import './operators';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from './shared/firebase/firebase.service';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FirebaseService]
})

@Injectable() // <<<=== required if the constructor has parameters

export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private _firebaseService: FirebaseService) {


  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
