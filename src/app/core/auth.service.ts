import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap, startWith, shareReplay } from 'rxjs/operators';

import { User } from '../shared/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<{ user: User, loaded: boolean }>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of (null)
        }
      }),
      map(user => {
        return {
          loaded: true,
          user: user
        }
      }),
      startWith({
          loaded: false,
          user: null
      }),
      shareReplay(1)
    );

    this.afAuth.getRedirectResult().then(result => {
      if (result.user) {
        this.updateUserData(result.user);
      }
    });
  }

  googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'docchula.com',
      prompt: 'select_account'
    });
    this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    this.afAuth.signInWithRedirect(provider);
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: { }
    }
    return userRef.set(data, { merge: true })
  }
}
