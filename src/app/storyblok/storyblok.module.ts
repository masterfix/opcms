import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryblokStoryComponent } from './pages/storyblok-story/storyblok-story.component';
import { StoryblokComponentDirective } from './directives/storyblok-component.directive';
import { StoryblokFallbackComponent } from './components/storyblok-fallback/storyblok-fallback.component';
import { StoryblokPageComponent } from './components/storyblok-page/storyblok-page.component';
import { StoryblokTeaserComponent } from './components/storyblok-teaser/storyblok-teaser.component';
import { StoryblokGridComponent } from './components/storyblok-grid/storyblok-grid.component';
import { StoryblokFeatureComponent } from './components/storyblok-feature/storyblok-feature.component';
import { StoryblokNavItemComponent } from './components/storyblok-nav-item/storyblok-nav-item.component';
import { RouterModule } from '@angular/router';
import { StoryblokPageHeaderComponent } from './components/storyblok-page-header/storyblok-page-header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { StoryblokEditableDirective } from './directives/storyblok-editable.directive';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { StoryblokCalendarComponent } from './components/storyblok-calendar/storyblok-calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { FormsModule } from '@angular/forms';
import { StoryblokTextComponent } from './components/storyblok-text/storyblok-text.component';
import { StoryblokDividerComponent } from './components/storyblok-divider/storyblok-divider.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    StoryblokStoryComponent,
    StoryblokPageComponent,
    StoryblokComponentDirective,
    StoryblokFallbackComponent,
    StoryblokTeaserComponent,
    StoryblokGridComponent,
    StoryblokFeatureComponent,
    StoryblokNavItemComponent,
    StoryblokPageHeaderComponent,
    StoryblokEditableDirective,
    StoryblokCalendarComponent,
    StoryblokTextComponent,
    StoryblokDividerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzDividerModule,
  ],
  exports: [
    StoryblokStoryComponent,
    StoryblokComponentDirective,
    StoryblokNavItemComponent,
    StoryblokEditableDirective,
  ]
})
export class StoryblokModule { }
