import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryDialogComponent } from './gallery/gallery-dialog/gallery-dialog.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, GalleryComponent, GalleryDialogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    SharedModule
  ]
})
export class MainModule { }
