import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokCalendarComponent } from './storyblok-calendar.component';

describe('StoryblokCalendarComponent', () => {
  let component: StoryblokCalendarComponent;
  let fixture: ComponentFixture<StoryblokCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
