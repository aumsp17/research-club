import { Component, ChangeDetectorRef, ViewChildren, ElementRef, QueryList, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren('image') images: QueryList<ElementRef>;
  imagePositions = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

}
