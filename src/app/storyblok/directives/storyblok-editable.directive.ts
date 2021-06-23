import { Directive, Input, OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[storyblokEditable]'
})
export class StoryblokEditableDirective implements OnChanges {

  @Input()
  storyblokEditable?: string;

  constructor(private viewContainerRef: ViewContainerRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setAttributes();
  }

  private setAttributes(): void {
    if (!this.storyblokEditable) {
      return;
    }

    const options = JSON.parse(this.storyblokEditable.replace('<!--#storyblok#', '').replace('-->', ''));

    const el = this.viewContainerRef.element.nativeElement;

    this.renderer.setAttribute(el, 'data-blok-c', JSON.stringify(options));
    this.renderer.setAttribute(el, 'data-blok-uid', `${options.id}-${options.uid}`);

    console.log('editable attributes set:', this.storyblokEditable);
  }

}
