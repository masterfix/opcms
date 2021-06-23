import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokPageComponent } from './storyblok-page.component';

describe('StoryblokPageComponent', () => {
  let component: StoryblokPageComponent;
  let fixture: ComponentFixture<StoryblokPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
