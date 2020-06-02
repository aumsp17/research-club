import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyStoryComponent } from './faculty-story/faculty-story.component'
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculty/faculty.component';


const routes: Routes = [
  {
    path: '',
    component: FacultyStoryComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FacultiesComponent
      },
      {
        path: ':id',
        component: FacultyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyStoryRoutingModule { }
