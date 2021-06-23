import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokPageHeaderComponent } from './storyblok-page-header.component';

describe('StoryblokPageHeaderComponent', () => {
  let component: StoryblokPageHeaderComponent;
  let fixture: ComponentFixture<StoryblokPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
