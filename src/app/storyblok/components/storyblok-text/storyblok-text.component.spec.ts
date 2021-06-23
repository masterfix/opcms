import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokTextComponent } from './storyblok-text.component';

describe('StoryblokTextComponent', () => {
  let component: StoryblokTextComponent;
  let fixture: ComponentFixture<StoryblokTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryblokTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryblokTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
