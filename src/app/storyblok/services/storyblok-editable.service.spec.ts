import { TestBed } from '@angular/core/testing';

import { StoryblokEditableService } from './storyblok-editable.service';

describe('StoryblokEditableService', () => {
  let service: StoryblokEditableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryblokEditableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
