import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

import { Talk } from '../shared/talk';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(
    private affs: AngularFirestore,
    private afs: AngularFireStorage
  ) { }

  listTalks(limit: number = null) {
    if (limit) {
      return this.affs
        .collection<Talk>('talks', ref => {
          return ref.where('deleted', '==', false).orderBy('date').limit(limit);
        })
        .snapshotChanges();
    } else {
      return this.affs
        .collection<Talk>('talks', ref => {
          return ref.where('deleted', '==', false).orderBy('date');
        })
        .snapshotChanges();
    }
  }

  getUpcomingTalk() {
    return this.affs
      .collection<Talk>('talks', ref => {
        return ref.where('deleted', '==', false).where('date', '>', new Date(Date.now())).orderBy('date')
      })
      .snapshotChanges()
  }

  getTalk(talkKey: string) {
    return this.affs
      .collection<Talk>('talks')
      .doc<Talk>(talkKey)
      .valueChanges();
  }

  createTalk(talk: Talk) {
    return this.affs
      .collection<Talk>('talks')
      .add({ ...talk, deleted: false });
  }

  updateTalk(talkKey: string, data: Partial<Talk>) {
    return this.affs
      .collection('talks')
      .doc<Talk>(talkKey)
      .update(data);
  }

  removeTalk(talkKey: string) {
    return this.affs
      .collection('talks')
      .doc<Talk>(talkKey)
      .update({ deleted: true });
  }

  uploadImage(image: File, type: string, metadata: any, talkKey: string) {
    return this.afs.upload(`talks/${talkKey}/images/${type}`, image, {
      customMetadata: metadata
    })
  }

  deleteImage(type: string, imageKey: string, talkKey: string) {
    return this.affs
      .collection('talks')
      .doc(talkKey)
      .collection('images')
      .doc(imageKey)
      .delete()
      .then(() => {
        this.afs
          .ref(`talks/${talkKey}/images/${type}`)
          .delete()
          .toPromise();
      });
  }
}
