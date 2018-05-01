import { CommonModule } from '@angular/common';
import { User } from './models/user';
import { Store } from './store';

import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import './operators';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from './shared/firebase/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from './auth/shared/services/auth/auth.service';



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
  user$: Observable<User>;

  constructor(
    private _firebaseService: FirebaseService,
    private router: Router,
    private store: Store,
    private authService: AuthService
  ) {


  }
  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.router.navigate(['home']);
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['home']);
  }

}
