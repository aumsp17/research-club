import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0;
  tempTop: number;

  constructor(
    private eleRef: ElementRef,
    private render: Renderer2,
    private router: Router
  ) {
    this.render.listen('window', 'load', () => {
      this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
    });
    this.router.events.subscribe((event) => {
      this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
    })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    console.log(this.initialTop, window.scrollY);
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
