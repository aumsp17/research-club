import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JourneyService } from '../../../core/journey.service';
import { Journey } from '../../../shared/journey';

@Component({
  selector: 'app-journies',
  templateUrl: './journies.component.html',
  styleUrls: ['./journies.component.scss']
})
export class JourniesComponent implements OnInit {

  journies$: Observable<(Journey & { $key: string })[]>;
  limit = 5;

  constructor(private journey: JourneyService) { }

  ngOnInit(): void {
    this.journies$ = this.journey.listJournies(this.limit).pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Journey),
            $key: snap.payload.doc.id
          }
        })
      })
    )
  }

}
