import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('click')
  action() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#b52f2f');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  }

}
