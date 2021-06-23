import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const ELEMENT_ID = 'storyblokBridge';
const JS_BRIDGE_URL = '//app.storyblok.com/f/storyblok-v2-latest.js';

@Injectable({
  providedIn: 'root'
})
export class StoryblokJsBridgeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  loadBridgeWhenInIFrame() {
    if (window.location.search.includes('_storyblok')) {
      console.log('storyblok iframe detected, loading js bridge...');
      this.appendBridgeScript(existingScript => {
        console.log('storyblok bridge script added, exsitingScript:', existingScript);
        const { StoryblokBridge } = window as any;
        this.initializeStoryblokBridge(StoryblokBridge);
      });
    }
  }

  private appendBridgeScript(callback: (existingScript: boolean) => void) {
    const existingScript = this.document.getElementById(ELEMENT_ID);
    if (!existingScript) {
      const script = this.document.createElement('script');
      script.src = JS_BRIDGE_URL;
      script.id = ELEMENT_ID;
      this.document.body.appendChild(script);
      script.onload = () => {
        callback(false);
      };
    } else {
      callback(true);
    }
  }

  private initializeStoryblokBridge(StoryblokBridge: any) {
    const bridgeConfig: StoryblokBridgeConfig = {};
    const storyblokInstance: StoryblokBridge = new StoryblokBridge(bridgeConfig);

    console.log('bridge initialized (service)');

    storyblokInstance.on(['published', 'change'], () => {
      location.reload();
    });

    storyblokInstance.on('input', (event) => {
      if (event) {
        console.log(event);
      }
    });

  }

}
