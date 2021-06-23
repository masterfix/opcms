import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryblokEditableService {

  constructor(private renderer: Renderer2) { }

  addToElement(el: any, editable: string): void {
    const options = JSON.parse(editable.replace('<!--#storyblok#', '').replace('-->', ''));
    this.renderer.setAttribute(el, 'data-blok-c', JSON.stringify(options));
    this.renderer.setAttribute(el, 'data-blok-uid', `${options.id}-${options.uid}`);
  }

}
