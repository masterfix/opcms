import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { TeaserBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-teaser',
  templateUrl: './storyblok-teaser.component.html',
  styleUrls: ['./storyblok-teaser.component.scss']
})
export class StoryblokTeaserComponent implements StoryblokComponent<TeaserBlok> {

  blok!: TeaserBlok;

}
