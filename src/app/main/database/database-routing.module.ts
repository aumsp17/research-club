import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseComponent } from './database/database.component';
import { SearchComponent } from './search/search.component';
import { EntryComponent } from './entry/entry.component';
import { AuthGuard } from '../../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DatabaseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SearchComponent
      },
      {
        path: ':id',
        component: EntryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
