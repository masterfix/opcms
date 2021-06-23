import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Story } from 'storyblok-js-client';
import { StoryblokClientService } from '../services/storyblok-client.service';

@Injectable({
  providedIn: 'root'
})
export class StoryblokStoryResolver implements Resolve<Story> {

  constructor(private storyblokClient: StoryblokClientService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Story> {
    const slug = this.generateSlug(route);
    console.log('story resolver for slug:', slug);
    return this.storyblokClient.getStory(slug);
  }

  private generateSlug(route: ActivatedRouteSnapshot): string {
    let slug = route.url.join('/') || 'home';


    return slug;
  }
}
