import { TestBed } from '@angular/core/testing';

import { StoryblokJsBridgeService } from './storyblok-js-bridge.service';

describe('StoryblokJsBridgeService', () => {
  let service: StoryblokJsBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryblokJsBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
