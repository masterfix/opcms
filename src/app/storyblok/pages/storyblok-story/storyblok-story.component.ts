import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Story } from 'storyblok-js-client';
import { BaseBlok } from '../../models/base-blok';

@Component({
  selector: 'app-storyblok-story',
  templateUrl: './storyblok-story.component.html',
  styleUrls: ['./storyblok-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryblokStoryComponent {

  story$: Observable<Story>;

  constructor(route: ActivatedRoute) {
    this.story$ = route.data.pipe(
      map(data => data['story']),
    );
  }

  getContentFromStory(story: Story): BaseBlok {
    return story.data.story.content as BaseBlok;
  }

}
