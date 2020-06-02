import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

import { Entry } from '../shared/entry';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private affs: AngularFirestore,
    private afs: AngularFireStorage,
    private auth: AuthService
  ) { }

  listEntries(limit: number = null, language: string = 'en') {
    if (limit) {
      return this.affs
        .collection<Entry>('database', ref => {
          return ref.where('deleted', '==', false).orderBy('name.' + language).limit(limit);
        })
        .snapshotChanges();
    } else {
      return this.affs
        .collection<Entry>('database', ref => {
          return ref.where('deleted', '==', false).orderBy('name.' + language);
        })
        .snapshotChanges();
    }
  }

  getEntry(entryKey: string, language: string = 'en') {
    return this.affs
      .collection<Entry>('database')
      .doc<Entry>(entryKey)
      .valueChanges();
  }

  createEntry(entry: Entry) {
    return this.affs
      .collection<Entry>('database')
      .add({ ...entry, deleted: false });
  }

  updateJourney(entryKey: string, data: Partial<Entry>) {
    return this.affs
      .collection('database')
      .doc<Entry>(entryKey)
      .update(data);
  }

  removeJourney(entryKey: string) {
    return this.affs
      .collection('database')
      .doc<Entry>(entryKey)
      .update({ deleted: true });
  }

  uploadImage(image: File, metadata: any, fileName: string, entryKey: string) {
    return this.afs.upload(`database/${entryKey}/images/${fileName}`, image, {
      customMetadata: metadata
    })
  }

  deleteImage(fileName: string, imageKey: string, entryKey: string) {
    return this.affs
      .collection('database')
      .doc(entryKey)
      .collection('images')
      .doc(imageKey)
      .delete()
      .then(() => {
        this.afs
          .ref(`database/${entryKey}/images/${fileName}`)
          .delete()
          .toPromise();
      });
  }
}
