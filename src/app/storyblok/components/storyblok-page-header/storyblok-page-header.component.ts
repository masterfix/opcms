import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { PageHeaderBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-page-header',
  templateUrl: './storyblok-page-header.component.html',
  styleUrls: ['./storyblok-page-header.component.scss']
})
export class StoryblokPageHeaderComponent implements StoryblokComponent<PageHeaderBlok> {

  blok!: PageHeaderBlok;

}
