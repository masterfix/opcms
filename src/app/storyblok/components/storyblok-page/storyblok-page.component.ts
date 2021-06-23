import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { PageBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-page',
  templateUrl: './storyblok-page.component.html',
  styleUrls: ['./storyblok-page.component.scss']
})
export class StoryblokPageComponent implements StoryblokComponent<PageBlok> {

  blok!: PageBlok;

}
