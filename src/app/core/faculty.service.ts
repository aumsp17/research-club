import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

import { Faculty } from '../shared/faculty';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(
    private affs: AngularFirestore,
    private afs: AngularFireStorage,
    private auth: AuthService
  ) { }

  listJournies(limit: number = null) {
    if (limit) {
      return this.affs
        .collection<Faculty>('faculties', ref => {
          return ref.where('deleted', '==', false).orderBy('dateAdded').limit(limit);
        })
        .snapshotChanges();
    } else {
      return this.affs
        .collection<Faculty>('faculties', ref => {
          return ref.where('deleted', '==', false).orderBy('dateAdded');
        })
        .snapshotChanges();
    }
  }

  getJourney(facultyKey: string) {
    return this.affs
      .collection<Faculty>('faculties')
      .doc<Faculty>(facultyKey)
      .valueChanges();
  }

  createJourney(faculty: Faculty) {
    return this.affs
      .collection<Faculty>('faculties')
      .add({ ...faculty, deleted: false });
  }

  updateJourney(facultyKey: string, data: Partial<Faculty>) {
    return this.affs
      .collection('faculties')
      .doc<Faculty>(facultyKey)
      .update(data);
  }

  removeJourney(facultyKey: string) {
    return this.affs
      .collection('faculties')
      .doc<Faculty>(facultyKey)
      .update({ deleted: true });
  }

  uploadImage(image: File, metadata: any, fileName: string, facultyKey: string) {
    return this.afs.upload(`faculties/${facultyKey}/images/${fileName}`, image, {
      customMetadata: metadata
    })
  }

  deleteImage(fileName: string, imageKey: string, facultyKey: string) {
    return this.affs
      .collection('faculties')
      .doc(facultyKey)
      .collection('images')
      .doc(imageKey)
      .delete()
      .then(() => {
        this.afs
          .ref(`faculties/${facultyKey}/images/${fileName}`)
          .delete()
          .toPromise();
      });
  }
}
