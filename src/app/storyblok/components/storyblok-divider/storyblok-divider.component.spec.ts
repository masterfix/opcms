import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokDividerComponent } from './storyblok-divider.component';

describe('StoryblokDividerComponent', () => {
  let component: StoryblokDividerComponent;
  let fixture: ComponentFixture<StoryblokDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
