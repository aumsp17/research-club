import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database/database.component';
import { SearchComponent } from './search/search.component';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [DatabaseComponent, SearchComponent, EntryComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DatabaseRoutingModule
  ]
})
export class DatabaseModule { }
