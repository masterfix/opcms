import { Component } from '@angular/core';
import { StoryblokComponent } from '../../interfaces/storyblok-component';
import { CalendarBlok } from '../../models/generated/cms-bloks';

@Component({
  selector: 'app-storyblok-calendar',
  templateUrl: './storyblok-calendar.component.html',
  styleUrls: ['./storyblok-calendar.component.scss']
})
export class StoryblokCalendarComponent implements StoryblokComponent<CalendarBlok> {

  blok!: CalendarBlok;

  date = new Date(2012, 11, 21);

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

}
