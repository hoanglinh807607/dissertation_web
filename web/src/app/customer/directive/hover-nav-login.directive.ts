import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverNavLogin]'
})
export class HoverNavLoginDirective {

  @HostBinding('style.color') color:string = "black";

  ngOnInit() {
    this.color = 'black';
  }

  constructor(private element: ElementRef, private render: Renderer2 ) {}

  @HostListener('mouseenter') mouseover(){
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    );
    this.color= "white";
    console.log("aaaa");
  }

  @HostListener('mouseleave') mouseleave() {
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      'transparent'
    );
    this.color = "black";
  }
}
