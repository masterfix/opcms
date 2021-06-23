import { TestBed } from '@angular/core/testing';

import { StoryblokComponentLoaderService } from './storyblok-component-loader.service';

describe('StoryblokComponentLoaderService', () => {
  let service: StoryblokComponentLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryblokComponentLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
