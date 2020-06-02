import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MDCUJourneyComponent } from './mdcu-journey/mdcu-journey.component';
import { JourneyComponent } from './journey/journey.component';
import { JourniesComponent } from './journies/journies.component';


const routes: Routes = [
  {
    path: '',
    component: MDCUJourneyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: JourniesComponent
      },
      {
        path: ':id',
        component: JourneyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MDCUJourneyRoutingModule { }
