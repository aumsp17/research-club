import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take, filter } from 'rxjs/operators';

import { TalkService } from '../../../core/talk.service';
import { Talk } from '../../../shared/talk';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  talks$: Observable<(Talk & { $key: string })[]>;
  pastTalks$: Observable<(Talk & { $key: string })[]>;
  upcomingTalk$: Observable<(Talk & { $key: string })>;
  limit = 5;

  constructor(private talk: TalkService) { }

  ngOnInit(): void {
    this.talks$ = this.talk.listTalks(this.limit).pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Talk),
            $key: snap.payload.doc.id
          }
        }).filter(snap => !!snap.url)
      }),
    )
    this.upcomingTalk$ = this.talk.getUpcomingTalk().pipe(
      map(data => {
        return {
          ...(data[0].payload.doc.data() as Talk),
          $key: data[0].payload.doc.id
        }
      })
    )
  }

}
