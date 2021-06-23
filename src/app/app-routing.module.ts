import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StoryblokStoryComponent } from './storyblok/pages/storyblok-story/storyblok-story.component';
import { StoryblokStoryResolver } from './storyblok/resolvers/storyblok-story.resolver';

const routes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: StoryblokStoryComponent,
    resolve: {
      story: StoryblokStoryResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
