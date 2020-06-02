import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DatabaseService } from '../../../core/database.service';
import { Entry } from '../../../shared/entry';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  entries$: Observable<(Entry & { $key: string })[]>;
  limit = 5;
  displayedColumns: string[] = ['name', 'department', 'status', 'detail']

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.entries$ = this.database.listEntries(this.limit).pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Entry),
            $key: snap.payload.doc.id
          }
        })
      })
    );
  }

}
