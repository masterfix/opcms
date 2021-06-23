import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutBlok } from './storyblok/models/generated/cms-bloks';
import { StoryblokClientService } from './storyblok/services/storyblok-client.service';
import { StoryblokJsBridgeService } from './storyblok/services/storyblok-js-bridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  layout$: Observable<LayoutBlok>

  constructor(private storyBlokClient: StoryblokClientService,
    private StoryblokJsBridge: StoryblokJsBridgeService
  ) {

    this.layout$ = this.storyBlokClient.getStory('layout').pipe(
      map(story => {
        return story.data.story.content as LayoutBlok;
      }),
    );

  }

  ngOnInit(): void {
    console.log('AppComponent init');
    this.StoryblokJsBridge.loadBridgeWhenInIFrame();
  }

}
