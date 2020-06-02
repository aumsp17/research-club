import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../shared/shared.module';
import { ResearchTalkRoutingModule } from './research-talk-routing.module';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { ResearchTalkComponent } from './research-talk/research-talk.component';


@NgModule({
  declarations: [TalksComponent, TalkComponent, ResearchTalkComponent],
  imports: [
    CommonModule,
    ResearchTalkRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ResearchTalkModule { }
