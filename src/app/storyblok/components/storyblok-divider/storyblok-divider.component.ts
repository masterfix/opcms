import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { DividerBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-divider',
  templateUrl: './storyblok-divider.component.html',
  styleUrls: ['./storyblok-divider.component.scss']
})
export class StoryblokDividerComponent implements StoryblokComponent<DividerBlok> {

  blok!: DividerBlok;

}
