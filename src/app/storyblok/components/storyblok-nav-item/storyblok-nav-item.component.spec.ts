import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokNavItemComponent } from './storyblok-nav-item.component';

describe('StoryblokNavItemComponent', () => {
  let component: StoryblokNavItemComponent;
  let fixture: ComponentFixture<StoryblokNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
