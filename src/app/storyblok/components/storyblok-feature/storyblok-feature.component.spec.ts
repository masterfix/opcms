import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokFeatureComponent } from './storyblok-feature.component';

describe('StoryblokFeatureComponent', () => {
  let component: StoryblokFeatureComponent;
  let fixture: ComponentFixture<StoryblokFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
