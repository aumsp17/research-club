import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../shared/shared.module';
import { MDCUJourneyRoutingModule } from './mdcu-journey-routing.module';
import { JourniesComponent } from './journies/journies.component';
import { JourneyComponent } from './journey/journey.component';
import { MDCUJourneyComponent } from './mdcu-journey/mdcu-journey.component';


@NgModule({
  declarations: [JourniesComponent, JourneyComponent, MDCUJourneyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MDCUJourneyRoutingModule
  ]
})
export class MDCUJourneyModule { }
