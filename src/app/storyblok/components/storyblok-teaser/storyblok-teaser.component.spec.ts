import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokTeaserComponent } from './storyblok-teaser.component';

describe('StoryblokTeaserComponent', () => {
  let component: StoryblokTeaserComponent;
  let fixture: ComponentFixture<StoryblokTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
