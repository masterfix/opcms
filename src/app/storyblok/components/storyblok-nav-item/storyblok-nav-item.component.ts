import { Component, Input, ViewEncapsulation } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { NavItemBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-nav-item',
  templateUrl: './storyblok-nav-item.component.html',
  styleUrls: ['./storyblok-nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoryblokNavItemComponent implements StoryblokComponent<NavItemBlok> {

  @Input()
  blok!: NavItemBlok;

}
