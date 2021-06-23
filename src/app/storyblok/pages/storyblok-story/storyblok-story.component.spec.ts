import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokStoryComponent } from './storyblok-story.component';

describe('StoryblokStoryComponent', () => {
  let component: StoryblokStoryComponent;
  let fixture: ComponentFixture<StoryblokStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryblokStoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
