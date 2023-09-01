import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @Input('appAppHighlight') highLightColor: string = 'blue';

  @HostListener('mouseenter') onMouseEnter() {
    // this.elementRef.nativeElement.style.backgrouondColor = 'red';
    this.changedBackgroundColor(this.highLightColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.elementRef.nativeElement.style.backgrouondColor = 'teransparent';
    this.changedBackgroundColor('teransparent');
  }

  private changedBackgroundColor(color: string) {
    // this.elementRef.nativeElement.style.backgrouondColor = color;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }


}
