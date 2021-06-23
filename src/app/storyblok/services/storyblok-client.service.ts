import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import Storyblok, { Story } from 'storyblok-js-client';

@Injectable({
  providedIn: 'root'
})
export class StoryblokClientService {

  private storyBlok: Storyblok;

  constructor() {

    this.storyBlok = new Storyblok({
      accessToken: 'cDMQHnjWDlYSHExAWTnyigtt',
      cache: {
        clear: 'auto',
        type: 'memory',
      },
      responseInterceptor: (response) => {
        //console.log('responseInterceptor response:', response);
        return response;
      }
    });

    //console.log('storyblok client:', this.storyBlok);
  }

  getStory(slug: string): Observable<Story> {
    return from(this.storyBlok.getStory(slug, {
      version: 'draft',
    }));
  }

}
