import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./interfaces/app.interface";

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: ICarouselContext | null = null;
  index: number = 0;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRef: ViewContainerRef) {
  }

  @Input('appCarouselFrom') images: string[] = [];
  timer = 0;

  @Input('appCarouselAutoPlay')
  set autoPlay(val: string) {
    if (val === 'No') {
      this.clearAutoPlay();
    } else {
      this.playAutoPlay();
    }
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }

    // @ts-ignore
    this.context.$implicit = this.images[this.index];
  }

  prev() {
    this.index--;
    if (this.index <= 0) {
      this.index = this.images.length - 1;
    }

    // @ts-ignore
    this.context.$implicit = this.images[this.index];
  }

  playAutoPlay() {
    this.timer = setInterval(() => {
      this.next()
    }, 1000)
  }

  clearAutoPlay() {
    clearInterval(this.timer);
  }
}
