// import { User } from './../../models/user';
// import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';


// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';

// // https://angularfirebase.com/lessons/role-based-permissions-and-authorization-with-firebase-auth/

// @Injectable()
// export class AuthService {

//   createUser(arg0: any, arg1: any): any {
//     throw new Error("Method not implemented.");
//   }
//   user: BehaviorSubject<User> = new BehaviorSubject(null);

//   constructor(private afAuth: AngularFireAuth,
//     private db: AngularFireDatabase) {


//     this.afAuth.authState
//       .switchMap(auth => {
//         if (auth) {
//           /// signed in
//           return this.db.object('users/' + auth.uid);
//         } else {
//           /// not signed in
//           return Observable.of(null);
//         }
//       })
//       .subscribe(user => {
//         this.user.next(user)
//       })
//   }


//   ///// SignIn - SignOut Process /////

//   googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return this.afAuth.auth.signInWithPopup(provider)
//       .then(credential => {
//         this.updateUser(credential.user);
//       });
//   }

//   signOut() {
//     this.afAuth.auth.signOut();
//   }

//   //// Update user data ////

//   /// updates database with user info after login
//   /// only runs if user role is not already defined in database
//   private updateUser(authData) {
//     const userData = new User(authData);
//     const ref = this.db.object('users/' + authData.uid);
//     ref.take(1)
//       .subscribe(user => {
//         if (!user.role) {
//           ref.update(userData);
//         }
//       });

//   }
// }
