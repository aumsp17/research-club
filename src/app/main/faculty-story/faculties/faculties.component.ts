import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FacultyService } from '../../../core/faculty.service';
import { Faculty } from '../../../shared/faculty';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  faculties$: Observable<(Faculty & { $key: string })[]>;
  limit = 5;

  constructor(private faculty: FacultyService) { }

  ngOnInit(): void {
    this.faculties$ = this.faculty.listJournies(this.limit).pipe(
      map(data => {
        return data.map(snap => {
          return {
            ...(snap.payload.doc.data() as Faculty),
            $key: snap.payload.doc.id
          }
        })
      })
    )
  }

}
