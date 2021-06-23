import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { TextBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-text',
  templateUrl: './storyblok-text.component.html',
  styleUrls: ['./storyblok-text.component.scss']
})
export class StoryblokTextComponent implements StoryblokComponent<TextBlok> {

  blok!: TextBlok;

}
