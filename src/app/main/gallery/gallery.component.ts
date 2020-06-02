import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { GalleryService } from '../../core/gallery.service';
import { Image } from '../../shared/image';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  journalImages$: Observable<(Image & { $key: string })[]>;
  workshopImages$: Observable<(Image & { $key: string })[]>;
  limit = 5;

  constructor(
    private gallery: GalleryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.journalImages$ = this.gallery.listImages(this.limit, 'journal').pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Image),
            $key: snap.payload.doc.id
          }
        })
      })
    )

    this.workshopImages$ = this.gallery.listImages(this.limit, 'workshop').pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Image),
            $key: snap.payload.doc.id
          }
        })
      })
    )
  }

  imageClick(imageUrl) {
    this.dialog.open(GalleryDialogComponent, {
      width: '60%',
      data: { imageUrl: imageUrl }
    })
  }
}
