import { TestBed } from '@angular/core/testing';

import { StoryblokClientService } from './storyblok-client.service';

describe('StoryblokClientService', () => {
  let service: StoryblokClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryblokClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
