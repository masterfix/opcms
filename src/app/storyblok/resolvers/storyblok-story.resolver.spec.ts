import { TestBed } from '@angular/core/testing';

import { StoryblokStoryResolver } from './storyblok-story.resolver';

describe('StoryblokStoryResolver', () => {
  let resolver: StoryblokStoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StoryblokStoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
