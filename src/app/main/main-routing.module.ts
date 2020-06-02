import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mdcu-journey',
    loadChildren: () => import('./mdcu-journey/mdcu-journey.module').then(m => m.MDCUJourneyModule),
  },
  {
    path: 'faculty-story',
    loadChildren: () => import('./faculty-story/faculty-story.module').then(m => m.FacultyStoryModule),
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'research-talk',
    loadChildren: () => import('./research-talk/research-talk.module').then(m => m.ResearchTalkModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
