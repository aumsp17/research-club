import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchTalkComponent } from './research-talk/research-talk.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';


const routes: Routes = [
  {
    path: '',
    component: ResearchTalkComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TalksComponent
      },
      {
        path: ':id',
        component: TalkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchTalkRoutingModule { }
