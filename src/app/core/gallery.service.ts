import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

import { Image } from '../shared/image';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private affs: AngularFirestore,
    private afs: AngularFireStorage,
    private auth: AuthService
  ) { }

  listImages(limit: number = null, type: string) {
    if (limit) {
      return this.affs
        .collection<Image>('gallery', ref => {
          return ref.where('type', '==', type).where('deleted', '==', false).orderBy('dateAdded').limit(limit);
        })
        .snapshotChanges();
    } else {
      return this.affs
        .collection<Image>('gallery', ref => {
          return ref.where('type', '==', type).where('deleted', '==', false).orderBy('dateAdded');
        })
        .snapshotChanges();
    }
  }

  getImage(imageKey: string) {
    return this.affs
      .collection<Image>('gallery')
      .doc<Image>(imageKey)
      .valueChanges();
  }

  createImage(journey: Image) {
    return this.affs
      .collection<Image>('gallery')
      .add({ ...journey, deleted: false });
  }

  updateImage(imageKey: string, data: Partial<Image>) {
    return this.affs
      .collection('gallery')
      .doc<Image>(imageKey)
      .update(data);
  }

  removeImage(imageKey: string) {
    return this.affs
      .collection('gallery')
      .doc<Image>(imageKey)
      .update({ deleted: true });
  }

  uploadImage(image: File, metadata: any, fileName: string) {
    const id = uuid();
    return this.afs.upload(`gallery/${id}/${fileName}`, image, {
      customMetadata: metadata
    })
  }

  deleteImage(fileName: string, imageKey: string) {
    return this.affs
      .collection('gallery')
      .doc(imageKey)
      .delete()
      .then(() => {
        this.afs
          .ref(`images/${imageKey}/images/${fileName}`)
          .delete()
          .toPromise();
      });
  }
}
