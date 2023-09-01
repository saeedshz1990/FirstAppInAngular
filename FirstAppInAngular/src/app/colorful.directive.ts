import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColor = ['#F80000', '#FF8E8E', '#FF2525', '#540000', '#000000',
    '#F87100', '#FFC18E', '#FF8825', '#542600', '#000000', '#009595'];
  @HostBinding('style.color') color: string = '';
  @HostBinding('style.border-color') borderColor: string = '';

  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColor.length);
    this.color = this.borderColor = this.availableColor[randomColorIndex];
  }
}
