import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

import { Journey } from '../shared/journey';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(
    private affs: AngularFirestore,
    private afs: AngularFireStorage,
    private auth: AuthService
  ) { }

  listJournies(limit: number = null) {
    if (limit) {
      return this.affs
        .collection<Journey>('journies', ref => {
          return ref.where('deleted', '==', false).orderBy('dateAdded').limit(limit);
        })
        .snapshotChanges();
    } else {
      return this.affs
        .collection<Journey>('journies', ref => {
          return ref.where('deleted', '==', false).orderBy('dateAdded');
        })
        .snapshotChanges();
    }
  }

  getJourney(journeyKey: string) {
    return this.affs
      .collection<Journey>('journies')
      .doc<Journey>(journeyKey)
      .valueChanges();
  }

  createJourney(journey: Journey) {
    return this.affs
      .collection<Journey>('journies')
      .add({ ...journey, deleted: false });
  }

  updateJourney(journeyKey: string, data: Partial<Journey>) {
    return this.affs
      .collection('journies')
      .doc<Journey>(journeyKey)
      .update(data);
  }

  removeJourney(journeyKey: string) {
    return this.affs
      .collection('journies')
      .doc<Journey>(journeyKey)
      .update({ deleted: true });
  }

  uploadImage(image: File, metadata: any, fileName: string, journeyKey: string) {
    return this.afs.upload(`journies/${journeyKey}/images/${fileName}`, image, {
      customMetadata: metadata
    })
  }

  deleteImage(fileName: string, imageKey: string, journeyKey: string) {
    return this.affs
      .collection('journies')
      .doc(journeyKey)
      .collection('images')
      .doc(imageKey)
      .delete()
      .then(() => {
        this.afs
          .ref(`journies/${journeyKey}/images/${fileName}`)
          .delete()
          .toPromise();
      });
  }
}
