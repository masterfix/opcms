import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokFallbackComponent } from './storyblok-fallback.component';

describe('StoryblokFallbackComponent', () => {
  let component: StoryblokFallbackComponent;
  let fixture: ComponentFixture<StoryblokFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokFallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
