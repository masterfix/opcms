import { Component, Input } from '@angular/core';
import { LayoutBlok } from 'src/app/storyblok/models/generated/cms-bloks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  layout?: LayoutBlok;

}
