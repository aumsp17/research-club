import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../shared/shared.module';
import { FacultyStoryRoutingModule } from './faculty-story-routing.module';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyStoryComponent } from './faculty-story/faculty-story.component';


@NgModule({
  declarations: [FacultiesComponent, FacultyComponent, FacultyStoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    FacultyStoryRoutingModule
  ]
})
export class FacultyStoryModule { }
