import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar/navbar.component';
import { ParallaxDirective } from './parallax.directive';
import { AnimateComponent } from './animate/animate.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';



@NgModule({
  declarations: [NavbarComponent, ParallaxDirective, AnimateComponent, BottomBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ScrollingModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent,
    AnimateComponent,
    NavbarComponent,
    BottomBarComponent,
    ParallaxDirective,
    FlexLayoutModule,
    ScrollingModule
  ]
})
export class SharedModule { }
