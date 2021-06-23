import { Directive, Input, OnChanges, Renderer2, ViewContainerRef } from '@angular/core';
import { BaseBlok } from '../models/base-blok';
import { StoryblokComponentLoaderService } from '../services/storyblok-component-loader.service';

@Directive({
  selector: '[storyblokComponent]',
})
export class StoryblokComponentDirective implements OnChanges {

  @Input()
  storyblokComponent: BaseBlok | undefined;

  constructor(private viewContainerRef: ViewContainerRef,
    private storyblokComponentLoader: StoryblokComponentLoaderService,
    private renderer: Renderer2,
  ) { }

  ngOnChanges(): void {
    this.loadComponent();
  }

  private loadComponent() {
    if (!this.storyblokComponent) {
      throw new Error('storyblok component data not set');
    }

    console.log('loading component', this.storyblokComponent.component);

    const componentRef = this.storyblokComponentLoader.loadStoryblokComponent(
      this.viewContainerRef,
      this.storyblokComponent
    );

    if (componentRef === null) {
      return;
    }

    if (this.storyblokComponent._editable) {
      const options = JSON.parse(this.storyblokComponent._editable.replace('<!--#storyblok#', '').replace('-->', ''));
      this.renderer.setAttribute(componentRef.location.nativeElement, 'data-blok-c', JSON.stringify(options));
      this.renderer.setAttribute(componentRef.location.nativeElement, 'data-blok-uid', `${options.id}-${options.uid}`);
    }
  }

}
