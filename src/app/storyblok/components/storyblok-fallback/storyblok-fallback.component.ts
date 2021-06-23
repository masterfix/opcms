import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { BaseBlok } from '../../models/base-blok';

@Component({
  selector: 'app-storyblok-fallback',
  templateUrl: './storyblok-fallback.component.html',
  styleUrls: ['./storyblok-fallback.component.scss']
})
export class StoryblokFallbackComponent implements StoryblokComponent<BaseBlok> {

  blok!: BaseBlok;

}
